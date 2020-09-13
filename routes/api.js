const express = require('express');
const app = express();
const authentication = require('../app/controllers/authentication');
const user = require('../app/controllers/user');
const authUser = require('../app/middleware/authUser');
const product = require('../app/controllers/product');
const admin = require('../app/controllers/admin');
const isAdmin = require('../app/middleware/adminAccessApi');

app.use('/auth', authentication);
app.use('/user', authUser, user);
app.use('/product', authUser, product);
app.use('/admin', authUser, isAdmin, admin);

module.exports = app;