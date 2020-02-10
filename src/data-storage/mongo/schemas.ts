import mongoose from "mongoose";

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
    'Telephone number': Number,
    'Email Address': String,
    'CONSENT' : String,
    'Mobile Phone': Number
});

export const emailsSchema = new mongoose.Schema({
    'Day 1': String,
    'Day 2': String,
    'Day 3': String,
    'Day_4': String
});