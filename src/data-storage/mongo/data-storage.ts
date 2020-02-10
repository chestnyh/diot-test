import {IDataStorage} from "../index";
import * as mongoose from "mongoose";


export class DataStorage<Type> implements IDataStorage<Type> {

    private _isReady: boolean = false;
    private _schema: mongoose.Schema;
    private _validationFunction: (data: any) => boolean;

    constructor(schema: mongoose.Schema, validationFunction: (data: any) => boolean) {
        this._schema = schema;
        this._validationFunction = validationFunction;
    }

    async delete(where: any): Promise<any> {


    }

    async insert(data: Type): Promise<void> {

        if(this._validationFunction(data))
            throw new Error("Invalid insert data");

        // TODO insert data

    }

    get isReady(): boolean {
        return this._isReady;
    }

    async select(where: any): Promise<Type> {


        // TODO request to db`

        // TODO validation data received from db

        return Type//

    }

    async update(where: any, data: any): Promise<void> {


    }
}
