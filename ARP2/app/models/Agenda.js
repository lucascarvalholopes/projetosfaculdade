const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Corrigir o caminho do arquivo database

const Cidade = sequelize.define('Agenda', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cidade: {
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

module.exports = Cidade; // Corrigir o nome da exportação para Cidade



