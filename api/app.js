const express = require('express');
const activityController = require('./activity/Activity.controller');

const app = express();

app.use(express.json());
app.use('/activity', activityController);

module.exports = app;
