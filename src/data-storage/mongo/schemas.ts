import mongoose from "mongoose";

export const patientsSchema = new mongoose.Schema({
    Program_Identifier : Number,
    Data_Source: String,
    Card_Number: Number,
    Member_ID : Number,
    First_Name: String,
    Last_Name: String,
    Date_of_Birth: Date,
    Address_1 : String,
    Address_2 : String,
    City: String,
    State: String,
    Zip_code : Number,
    Telephone_number: Number,
    Email_Address: String,
    CONSENT : String,
    Mobile_Phone: Number
});

export const emailsSchema = new mongoose.Schema({
    Day_1: String,
    Day_2: String,
    Day_3: String,
    Day_4: String
});