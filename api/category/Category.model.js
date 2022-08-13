const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

class Category extends Model {}
Category.init({
  categoryId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('Income', 'Expense'),
    allowNull: false,
  },
}, {
  timestamps: false,
  sequelize,
  modelName: 'Category',
});

module.exports = Category;
