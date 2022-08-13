// Synchronizes db with models
const { sequelize } = require('./db');
const Activity = require('./activity/Activity.model');
const Category = require('./category/Category.model');
const User = require('./user/User.model');
sequelize.models = {
  Activity,
  Category,
  User,
};
module.exports = {
  ...sequelize.models,
  sequelize,
};
