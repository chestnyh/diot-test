import mongoose, {Schema} from "mongoose";

export const patientsSchema = new mongoose.Schema({
    'Program Identifier' : Number,
    'Data Source': String,
    'Card Number': Number,
    'Member ID' : Number,
    'First Name': String,
    'Last Name': String,
    'Date of Birth': Date,
    'Address 1' : String,
    'Address 2' : String,
    'City': String,
    'State': String,
    'Zip code' : Number,
    'Telephone number': Schema.Types.Mixed,
    'Email Address': String,
    'CONSENT' : String,
    'Mobile Phone': Number
});

export const emailsSchema = new mongoose.Schema({
    'day': Number,
    'emails': [String]
});