import {DataStorage} from "../index";


export class EmailsDataStorage implements DataStorage{

    private _isReady: boolean;

    constructor() {


    }

    delete(where: any): any {


    }

    insert(data: any): void {
    }

    get isReady(): boolean {
        return this._isReady;
    }

    select(where: any): any {
    }

    update(where: any, data: any): void {
    }


}