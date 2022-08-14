const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../db');

class Session extends Model {}
Session.init({
  id: {
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
  tableName: 'Session',
});

module.exports = Session;
