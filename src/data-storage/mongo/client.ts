import mongoose from 'mongoose';

// TODO through configs
mongoose.connect('mongodb://localhost:27017/diot-test', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', function() {
    console.log("error"); // TODO handler
});

db.once('open', function() {
    console.log("open"); // TODO handler
});

export {mongoose};