const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

// module.exports = (sequelize) => {
//   sequelize.define('activity', {
//     activityId: {
//       primaryKey: true,
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       unique: true,
//       allowNull: false,
//     },
//     type: {
//       type: DataTypes.ENUM('Income', 'Expense'),
//       allowNull: false,
//     },
//     amount: {
//       type: DataTypes.DOUBLE,
//       validate: {
//         isDecimal: true,
//       },
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING(140),
//     },
//   }, {
//     timestamps: false,
//   });
// };
class Activity extends Model {}
Activity.init({
  activityId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('Income', 'Expense'),
    allowNull: false,
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
});

module.exports = Activity;
