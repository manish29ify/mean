var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')
var bodyParser = require("body-parser");
const dotenv = require('dotenv');
// Set up Global configuration access
dotenv.config();

var corsOptions = {
  origin: ['http://localhost:4200', 'http://localhost:3000'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const db = require('./db/connection');
db.connect(db.driver.mongo)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'view'));
// app.engine('html', 'pug');
// app.set('view engine', 'html');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'view')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var indexRouts = require('./routes/index');
app.use('/', cors(corsOptions), indexRouts);



module.exports = app;
