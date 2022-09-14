var mongoose = require('mongoose');

const host = process.env.MONGO_DB_HOST
const port = process.env.MONGO_DB_PORT
const dbName = process.env.MONGO_DB_NAME

var url = `mongodb://${host}:${port}/${dbName}`
mongoose.connect(url, { keepAlive: true, keepAliveInitialDelay: 300000 });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Mongo DB connected");
});


