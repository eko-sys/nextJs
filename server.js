const express = require('express');
const server = express();

const next = require('next');
require('dotenv').config()
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev});
const handle = app.getRequestHandler();

const sessionLogin = require('./app/middleware/sessionLogin');
const api = require('./routes/api');
const checkLogin = require('./app/middleware/checkLogin');
const isAdmin = require('./app/middleware/isAdmin');

server.use(sessionLogin);
server.use('/api', api); // api

app.prepare().then(() => {

  server.get('/auth/login', (req, res) => {
    req.session.userLogin ? res.redirect('/dashboard/home') : null
    return app.render(req, res, '/auth/login');
  });

  server.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/auth/login');
  });

  server.get('/dashboard/home', checkLogin, (req, res) => {
    return app.render(req, res, '/dashboard/home', {token: req.session.userLogin.token});
  })

  server.get('/dashboard/history', checkLogin, (req, res) => {
    return app.render(req, res, '/dashboard/history', {token: req.session.userLogin.token});
  })

  server.get('/dashboard/admin', checkLogin, isAdmin, (req, res) => {
    return app.render(req, res, '/dashboard/admin', {token: req.session.userLogin.token});
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  });

});

server.listen(3000, () => {
  console.log('server running on port 3000')
});