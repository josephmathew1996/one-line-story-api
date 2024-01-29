const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const Player = sequelize.define('player', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Player;
