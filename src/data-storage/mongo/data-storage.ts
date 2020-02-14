import {IDataStorage} from "../index";
import * as mongoose from "mongoose";
import {mongoose as mongoClient} from "./client";
import {IReport, isIReport} from "../../reports";

export class DataStorage<Type> implements IDataStorage<Type> {

    private _isReady: boolean = false;
    private _schema: mongoose.Schema;
    private _collectionName: string;
    private _model: mongoose.Model<mongoose.Document>;
    private _converter: (data: mongoose.Document) => Type;
    private _validationFunction: Array<(data: Type) => Type | IReport>;

    constructor(schema: mongoose.Schema, collectionName: string, converter: (data: any) => Type, validationFunction: Array<(data: Type) => Type | IReport>) {
        this._schema = schema;
        this._collectionName = collectionName;
        this._model = mongoClient.model(this._collectionName, this._schema);
        this._converter = converter;
        this._validationFunction = validationFunction;
    }

    async delete(where: any): Promise<any> {

        // TODO here

    }

    async insert(data: Type): Promise<Type | IReport> {

        for(let func of this._validationFunction){
            const res: Type| IReport = func(data);
            if(isIReport(res))
                return res;
        }

        const obj = new this._model(data);
        return this._converter(
            await obj.save()
        );

    }

    get isReady(): boolean {
        return this._isReady;
    }

    async select(where: any): Promise<Type> {


        // TODO request to db`

        // TODO validation data received from db

        return new Promise((resolve, reject) => {

        });

    }

    async update(where: any, data: any): Promise<void> {


    }
}
