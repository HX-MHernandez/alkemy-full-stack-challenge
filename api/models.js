// Synchronizes db with models
const { sequelize } = require('./db');
const Activity = require('./activity/Activity.model');
const Category = require('./category/Category.model');
const User = require('./user/User.model');
const Session = require('./session/session.model');

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
