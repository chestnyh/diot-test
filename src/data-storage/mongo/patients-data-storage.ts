import {DataStorage} from "./data-storage";
import * as mongoose from "mongoose";
import {patientsSchema} from "./schemas"
import {Patient} from "../../types/patient"


export function isPatient(data: any): data is Patient {

    // TODO validation script
    return true;
}

export class PatientsDataStorage extends DataStorage<Patient> {}
