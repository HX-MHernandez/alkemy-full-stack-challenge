// Synchronizes db with models
const { sequelize } = require('./db');
const Activity = require('./activity/Activity.model');
const Category = require('./category/Category.model');
sequelize.models = {
  Activity,
  Category,
};

module.exports = {
  ...sequelize.models,
  sequelize,
};
