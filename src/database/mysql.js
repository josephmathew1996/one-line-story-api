const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('storygame', 'myuser', 'password', {
  host: 'localhost', // or '127.0.0.1'
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 10, 
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

module.exports = sequelize;
