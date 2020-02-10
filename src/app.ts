import {DataLoader} from "./data-loader";
import {LocalDataLoader} from "./data-loader/local-data-loader";
import {IDataStorage} from "./data-storage";
import {IReport} from "./reports";

import {PatientsDataStorage as MongoPatientsDataStorage, isPatient} from "./data-storage/mongo/patients-data-storage";
import {EmailsDataStorage as MongoEmailsDataStorage, isEmail} from "./data-storage/mongo/emails-data-storage";
import {Patient} from "./types/patient";
import {Email} from "./types/email";

import {FileReporter} from "./reports/file-reporter"
import * as path from "path";

// mongo schemas
import {patientsSchema, emailsSchema} from "./data-storage/mongo/schemas";

const report: IReport  = new FileReporter(path.join(__dirname, "..", "report")); // TODO with config

const dataLoader : DataLoader<Patient> = new LocalDataLoader();

async function start(){

    const patientsDataStorage: IDataStorage<Patient> = new MongoPatientsDataStorage(patientsSchema, "patients", isPatient);
    const emailsDataStorage: IDataStorage<Email> = new MongoEmailsDataStorage(emailsSchema,"emails", isEmail);

    await dataLoader.setSource(path.join(__dirname, "..", "loadData"));

    const data = await dataLoader.getData();

    for(let i = 0; i< data.length; i++){

        await patientsDataStorage.insert(data[i])
    }

}


start();