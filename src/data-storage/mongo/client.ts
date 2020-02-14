import mongoose from 'mongoose';

const MONGODB_HOST = process.env.MONGODB_HOST || "localhost";
const MONGODB_PORT = process.env.MONGO_PORT || 27017;
const MONGODB_DB = process.env.MONGO_DB || "diot-test";


mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', function() {
    // TODO handler
});

db.once('open', function() {
    // TODO handler
});

export {mongoose, db};