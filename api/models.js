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

// Relations
Activity.belongsTo(Category, {
  foreignKey: 'categoryId',
});
Category.hasMany(Activity);
Activity.belongsTo(User, {
  foreignKey: 'userId',
});
User.hasMany(Activity);
Category.belongsTo(User, {
  foreignKey: 'userId',
});
User.hasMany(Category);
User.belongsTo(Session, {
  foreignKey: 'sessionId',
});
Session.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = {
  ...sequelize.models,
  sequelize,
};
