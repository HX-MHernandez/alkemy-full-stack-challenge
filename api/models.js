// This file syncs db with models
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

// Relations
Activity.belongsTo(Category);
Category.hasMany(Activity);
Activity.belongsTo(User);
User.hasMany(Activity);
Category.belongsTo(User);
User.hasMany(Category);
User.belongsTo(Session);
Session.hasMany(User);

module.exports = {
  ...sequelize.models,
  sequelize,
};
