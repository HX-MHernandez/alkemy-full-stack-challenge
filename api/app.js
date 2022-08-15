const express = require('express');
const userController = require('./src/user/User.controller');
const session = require('express-session');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/user', userController);

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  // Sets unlimited cookie
  cookie: { maxAge: 100000000000 },
}));

module.exports = app;
