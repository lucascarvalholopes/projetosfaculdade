const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks', 'root', 'Lp22335678', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
