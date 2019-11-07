var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-Parser')

var app = express();

//view engine setup
/** 
 * 1. Register our view engine.
 * 2. define the path to our view engine
 * 3. tell expressJS what template engine to use
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}) );
app.use(bodyParser.text() );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const homeController = require('./controllers/home');
app.use('/', homeController)

app.listen(7777)