import {IReport} from "../index";
import * as fs from "fs";
import * as stream from "stream";

export class FileReporter implements IReport{

    private _stream: stream.Writable;
    private readonly _file: string;

    constructor(file: string) {
        this._file = file;
        this._stream = fs.createWriteStream(this._file, {flags: 'a'});
    }

    add(level: string, message: string): void {

        const data = new Date();
        const str = `${data.toISOString()}|${level}|${message}\n`;

        fs.appendFile(this._file, str, () => {

        });

    }
}