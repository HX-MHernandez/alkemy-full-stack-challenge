const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../db');

class Activity extends Model {}
Activity.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
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
  amount: {
    type: DataTypes.DOUBLE,
    validate: {
      isDecimal: true,
    },
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(140),
  },
}, {
  timestamps: false,
  sequelize,
  modelName: 'Activity',
  tableName: 'Activity',
});

module.exports = Activity;
