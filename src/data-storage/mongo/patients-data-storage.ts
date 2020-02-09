import {DataStorage} from "../index";
import * as mongoose from "mongoose";


export async function patientsDataStorageCreator(): Promise<PatientsDataStorage>{
    // TODO implementation
}

export class PatientsDataStorage implements DataStorage{

    private _isReady: boolean;

    constructor() {


    }

    delete(where: any): any {
        // TODO realize method
    }

    insert(data: any): void {
        // TODO realize method
    }

    get isReady(): boolean {
        return this._isReady;
    }

    select(where: any): any {
        // TODO realize method
    }

    update(where: any, data: any): void {
        // TODO realize method
    }


}