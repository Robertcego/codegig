const Sequelize = require('sequelize');

require('dotenv').config;
const { DB_PASS, DB_HOST } = process.env;

module.exports = new Sequelize('codegig', 'postgres', `${DB_PASS}`, {
  host: `${DB_HOST}`,
  dialect: 'postgres',
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
