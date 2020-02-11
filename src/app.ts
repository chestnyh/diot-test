import * as path from "path";
import dotenv from 'dotenv';



// interfaces
import {IDataLoader} from "./data-loader";
import {IDataStorage} from "./data-storage";
import {IReport} from "./reports";

import {LocalDataLoader} from "./data-loader/local-data-loader";

import {PatientsDataStorage as MongoPatientsDataStorage, isPatient} from "./data-storage/mongo/patients-data-storage";
import {EmailsDataStorage as MongoEmailsDataStorage, isEmail} from "./data-storage/mongo/emails-data-storage";
import {Patient} from "./types/patient";
import {Email} from "./types/email";

import {FileReporter} from "./reports/file-reporter"

// mongo schemas
import {patientsSchema, emailsSchema} from "./data-storage/mongo/schemas";

// Add config to process obj
dotenv.config({path:path.join(__dirname, "..", ".env")});

const dataLoader : IDataLoader<Patient> = new LocalDataLoader();
dataLoader.setSource(path.join(__dirname, "..", "loadData")); // TODO with config

const patientsDataStorage: IDataStorage<Patient> = new MongoPatientsDataStorage(patientsSchema, "patients", isPatient);
const emailsDataStorage: IDataStorage<Email> = new MongoEmailsDataStorage(emailsSchema,"emails", isEmail);

const report: IReport  = new FileReporter(path.join(__dirname, "..", "report")); // TODO with config