const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../db');

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
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      customValidator: (value) => {
        const enums = ['Income', 'Expense'];
        if (!enums.includes(value)) {
          throw new Error('Enum type is incorrect');
        }
      },
    },
  },
}, {
  timestamps: false,
  sequelize,
  modelName: 'Category',
  tableName: 'Category',
});

module.exports = Category;
