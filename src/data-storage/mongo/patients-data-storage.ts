import {DataStorage} from "./data-storage";
import {IPatient} from "../../types/patient"

export function patientConverter(data: IPatient): IPatient {

    return {
        "Address 1":  data["Address 1"],
        "Address 2": data["Address 2"],
        "Card Number": data["Card Number"],
        "Data Source": data["Data Source"],
        "Date of Birth": data["Date of Birth"],
        "Email Address": data["Email Address"],
        "First Name": data["First Name"],
        "Last Name": data["Last Name"],
        "Member ID": data["Member ID"],
        "Mobile Phone": data["Mobile Phone"],
        "Program Identifier": data["Program Identifier"],
        "Telephone number": data["Telephone number"],
        "Zip code": data["Zip code"],
        'CONSENT': data["CONSENT"],
        "City": data["City"],
        "State": data["State"]
    }

}

export function isPatient(data: any): data is IPatient {

    // TODO validation script
    return true;
}

export class PatientsDataStorage extends DataStorage<IPatient> {}
