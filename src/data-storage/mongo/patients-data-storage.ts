import {DataStorage} from "./data-storage";
import * as mongoose from "mongoose";
import {patientsSchema} from "./schemas"
import {Patient} from "../../types/patient"


export function isPatient(data: any): data is Patient {

    // TODO validation script
    return true;
}


/*export async function patientsDataStorageCreator(schema: mongoose.Schema, validationFunction: (data: any) => boolean): Promise<PatientsDataStorage>{

    return new PatientsDataStorage(patientsSchema, isPatient);

}*/

export class PatientsDataStorage extends DataStorage<Patient> {}
