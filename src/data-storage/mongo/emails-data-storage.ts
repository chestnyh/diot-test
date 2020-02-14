import {DataStorage} from "./data-storage";
import {IEmail} from "../../types/email";

export function emailConverter(data: IEmail): IEmail {

    return {
        "day":  data["day"],
        "emails": data["emails"]
    }

}

export function isEmail(data: any): data is IEmail {

    // TODO validation script
    return true;
}

export class EmailsDataStorage extends DataStorage<IEmail> {}
