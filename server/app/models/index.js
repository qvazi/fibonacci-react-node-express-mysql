const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');
const FibonacciRequestLogModel = require('./FibonacciRequestLog.model.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: process.env.NODE_ENV !== 'production',
});


module.exports = {
  Sequelize,
  sequelize,
  FibonacciRequestLog: FibonacciRequestLogModel(sequelize, Sequelize),
};
