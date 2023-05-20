//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Lucas de carvalho Lopes
//DATA: 20/05/2023
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks', 'root', 'Lp22335678', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
