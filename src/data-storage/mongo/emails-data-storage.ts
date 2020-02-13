import {DataStorage} from "./data-storage";
import {Email} from "../../types/email";
import {emailsSchema} from "./schemas"
import * as mongoose from "mongoose";

export function isEmail(data: any): data is Email {

    // TODO validation script
    return true;
}

export class EmailsDataStorage extends DataStorage<Email> {}
