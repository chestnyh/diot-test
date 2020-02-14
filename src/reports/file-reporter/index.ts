import {IReport, IReportsManager} from "../index";
import * as fs from "fs";
import * as stream from "stream";

export class FileReporter implements IReportsManager{

    private _stream: stream.Writable;
    private readonly _file: string;

    constructor(file: string) {
        this._file = file;
        this._stream = fs.createWriteStream(this._file, {flags: 'a'});
    }

    add(report: IReport): void {

        const date = new Date();
        const str = `${date.toISOString()}|${report.level}|${report.message}\n`;

        fs.appendFile(this._file, str, () => {
            // TODO
        });

    }
}