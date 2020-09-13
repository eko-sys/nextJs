const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(cookieParser());
app.set('trustproxy', true)

app.use(session({
	secret: 'nghehe',
	resave: true,
	saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())

module.exports = app;