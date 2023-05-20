// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de Carvalho Lopes
// DATA: 20/05/2023

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Corrigir o caminho do arquivo database

const City = sequelize.define('City', {
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
},
name: {
type: DataTypes.STRING,
allowNull: false,
},
listId: {
type: DataTypes.INTEGER,
allowNull: false,
references: {
model: 'Lists', // nome da tabela no banco de dados
key: 'id'
}
}
});

module.exports = City; 



