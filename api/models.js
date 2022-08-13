// Synchronizes models
const { sequelize } = require('./db');
const Activity = require('./activity/Activity.model');
sequelize.models = { Activity };

module.exports = {
  ...sequelize.models,
  sequelize,
};
