const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../db');

class User extends Model {}
User.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(140),
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  timestamps: false,
  sequelize,
  modelName: 'User',
  tableName: 'User',
});

module.exports = User;
