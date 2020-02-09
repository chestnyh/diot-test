import {DataLoader} from "./data-loader/index";
import {LocalDataLoader} from "./data-loader/local-data-loader";
import {DataStorage} from "./data-storage/index";
import {PatientsDataStorage as MongoPatientsDataStorage} from "./data-storage/mongo/patients-data-storage";
import {Patient} from "./types/patient";
import * as path from "path";

const dataLoader : DataLoader<Patient> = new LocalDataLoader();
const dataStorage: DataStorage = new MongoPatientsDataStorage();

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