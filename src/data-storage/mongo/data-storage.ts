import {IDataStorage} from "../index";
import * as mongoose from "mongoose";
import {mongoose as mongoClient} from "./client";

export class DataStorage<Type> implements IDataStorage<Type> {

    private _isReady: boolean = false;
    private _schema: mongoose.Schema;
    private _collectionName: string;
    private _model: mongoose.Model<mongoose.Document>;
    private _validationFunction: (data: any) => boolean;

    constructor(schema: mongoose.Schema, collectionName: string, validationFunction: (data: any) => boolean) {
        this._schema = schema;
        this._collectionName = collectionName;
        this._model = mongoClient.model(this._collectionName, this._schema);
        this._validationFunction = validationFunction;
    }

    async delete(where: any): Promise<any> {


    }

    async insert(data: Type): Promise<void> {

        if(!this._validationFunction(data))
            throw new Error("Invalid insert data");

        const obj = new this._model(data);
        await obj.save();

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
