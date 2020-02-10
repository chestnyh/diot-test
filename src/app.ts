import {DataLoader} from "./data-loader/index";
import {LocalDataLoader} from "./data-loader/local-data-loader";
import {IDataStorage} from "./data-storage/index";

import {PatientsDataStorage as MongoPatientsDataStorage, isPatient} from "./data-storage/mongo/patients-data-storage";
import {EmailsDataStorage as MongoEmailsDataStorage, isEmail} from "./data-storage/mongo/emails-data-storage";
import {Patient} from "./types/patient";
import {Email} from "./types/email";
import * as path from "path";

// mongo schemas
import {patientsSchema, emailsSchema} from "./data-storage/mongo/schemas";

const dataLoader : DataLoader<Patient> = new LocalDataLoader();


const patientsDataStorage: IDataStorage<Patient> = new MongoPatientsDataStorage(patientsSchema, isPatient);
const emailsDataStorage: IDataStorage<Email> = new MongoEmailsDataStorage(emailsSchema, isEmail);

// load data source

async function start(){

    await dataLoader.setSource(path.join(__dirname, "..", "loadData")); // TODO get file from params

    const data = await dataLoader.getData();

}


start();


//if(!dataLoader.isExist)
    //throw new Error("Source does not exist");

// Data storage

//if(!dataStorage.isReady)
//    throw new Error("Can't connect to database");

// Main logic

// Create connection with mongoDB use mongoose


// Go through data and validate it
