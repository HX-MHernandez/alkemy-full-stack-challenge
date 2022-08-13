const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

class Session extends Model {}
Session.init({
  sessionId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
  },
}, {
  timestamps: false,
  sequelize,
  modelName: 'Session',
});

module.exports = Session;
