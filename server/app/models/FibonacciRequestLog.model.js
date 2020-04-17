module.exports = (sequelize, { DataTypes }) => sequelize.define('fibonacci_request_log', {
  number: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  value: {
    type: DataTypes.TEXT,
  },
  ip: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
});
