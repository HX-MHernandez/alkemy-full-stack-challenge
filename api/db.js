// Conection to db
require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = process.env;

const sequelize = new Sequelize(`alkemy-challenge`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: DB_HOST,
  logging: false,
  native: false,
  dialect: 'postgres',
});

module.exports = {
  ...sequelize.models,
  sequelize,
};
