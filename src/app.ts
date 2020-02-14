import * as path from "path";
import dotenv from 'dotenv';

// interfaces
import {IDataLoader} from "./data-loader";
import {IDataStorage} from "./data-storage";
import {IReport, IReportsManager, isIReport} from "./reports";
import {db} from "./data-storage/mongo/client"

import {LocalDataLoader} from "./data-loader/local-data-loader";

import {PatientsDataStorage as MongoPatientsDataStorage, isPatient, patientConverter} from "./data-storage/mongo/patients-data-storage";
import {EmailsDataStorage as MongoEmailsDataStorage, isEmail, emailConverter} from "./data-storage/mongo/emails-data-storage";
import {IPatient} from "./types/patient";
import {IEmail} from "./types/email";

import {FileReporter} from "./reports/file-reporter"

import patientDataHandlers from "./data-storage/handlers/patientHandlers";

// mongo schemas
import {patientsSchema, emailsSchema} from "./data-storage/mongo/schemas";

// Add config to process obj
dotenv.config({path:path.join(__dirname, "..", ".env")});

const loadFilePath: string = path.join(__dirname, "..", "loadData"); // TODO through config
const reportFilePath: string = path.join(__dirname, "..", "report"); // TODO through config

async function  main(){

    const dataLoader : IDataLoader<IPatient> = new LocalDataLoader();
    await dataLoader.setSource(loadFilePath); //

    const patientsDataStorage: IDataStorage<IPatient> = new MongoPatientsDataStorage(
        patientsSchema,
        "patients",
        patientConverter,
        patientDataHandlers);

    const emailsDataStorage: IDataStorage<IEmail> = new MongoEmailsDataStorage(emailsSchema,"emails",emailConverter, [] );

    const reportManager: IReportsManager  = new FileReporter(reportFilePath);

    const data: IPatient[] = await dataLoader.getData();

    const emails: string[] = [];

    for(let value of data){

        const result = await patientsDataStorage.insert(value);

        if(isIReport(result)){
            reportManager.add(result);
            continue;
        }

        reportManager.add({level:"success",message:`Patient with ${result["Member ID"]} successfully added`});

        if(result["CONSENT"] && result["Email Address"])
            emails.push(result["Email Address"])


    }

    await emailsDataStorage.insert({day: 1, emails});

    await db.close();
}

main();



