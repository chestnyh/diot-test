import * as fs from "fs"
import {IDataLoader} from "./index"
import {Patient} from "../types/patient";

export interface LocalDataLoaderConfig{
    fileEncoding?: string,
    rowSeparator?: string,
    valueSeparator?: string
}

export class LocalDataLoader implements IDataLoader<Patient>{

    private _isReady : boolean = false;
    private _sourceFile : string = "";
    private _fileEncoding: string = "utf8";
    private _rowSeparator : string = "\n";
    private _valueSeparator : string = "|";

    constructor(config?: LocalDataLoaderConfig) {

        if(!config)
            return;

        // TODO more prettier syntax
        if(config.fileEncoding)
            this._fileEncoding = config.fileEncoding;

        // TODO more prettier syntax
        if(config.rowSeparator)
            this._rowSeparator = config.rowSeparator;

        // TODO more prettier syntax
        if(config.valueSeparator)
            this._valueSeparator = config.valueSeparator;

    }

    get isReady() : boolean {
        return this._isReady;
    };

    setSource(path: string): Promise<void> {

        return new Promise((resolve, reject) => {

            fs.access(path, fs.constants.F_OK,(error) =>{

                if(error)
                    reject(error);
                else{
                    this._isReady = true;
                    this._sourceFile = path;
                    resolve();
                }
            })

        });

    }

    static createObjFromArrays(keys: string[], values: any[]): {[key: string]: any}{

        if(keys.length !== values.length)
            throw new Error("Keys length must be equal values length");

        const obj : {[key: string]: any} = {};

        for ( let i = 0; i < keys.length; i++ ){
            obj[keys[i]] = values[i];
        }

        return obj;

    }

    private _validateData(data: string): any[]{ // TODO

        const rows = data.split(this._rowSeparator);
        let keys: string[] = rows[0].split(this._valueSeparator);
        rows.shift();

        const result = [];

        for( let i = 0; i < rows.length; i++ ){

            const row: string[] = rows[i].split(this._valueSeparator);

            result.push(LocalDataLoader.createObjFromArrays(keys, row));


        }

        return result;

    }

    getData(): Promise<Patient[]> {

        if(!this._isReady)
            throw new Error("Data source is not ready to get data. Your data source do not installed");

        return new Promise((resolve, reject) => {

            fs.readFile(this._sourceFile, this._fileEncoding, (err: Error | null, data: string)=>{

                if(err)
                    reject(err);

                const patients = this._validateData(data);

                resolve(patients);

            });

        });

    }

}
