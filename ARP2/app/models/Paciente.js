//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Lucas de carvalho Lopes
//DATA: 20/05/2023
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../..database');

// Define o modelo "List"
const List = sequelize.define('List', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = List;
