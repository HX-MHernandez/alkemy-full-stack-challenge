// This file syncs db with models
const { sequelize } = require('./db');
const Activity = require('./src/activity/Activity.model');
const Category = require('./src/category/Category.model');
const User = require('./src/user/User.model');
const Session = require('./src/session/Session.model');

sequelize.models = {
  Activity,
  Category,
  User,
  Session,
};

module.exports = {
  ...sequelize.models,
  sequelize,
};
