const mongoose = require('mongoose');
const env = require('./environment');

mongoose.connect(`mongodb+srv://tanmay:${env.db_pass}@cluster0.i8bky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to database"));
db.once('open', function(){
    console.log('Connected to Database::MongoDB')
});

module.exports = db;