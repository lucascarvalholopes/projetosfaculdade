//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Lucas de carvalho Lopes
//DATA: 20/05/2023
const sequelize = require('../database'); 
const Item = require('./City');
const List = require('./PontoTuristico');

const models = {
  List,
  Item
};

// Relacionamentos entre os modelos
Item.belongsTo(List, { foreignKey: 'listId', as: 'list' });
List.hasMany(Item, { foreignKey: 'listId', as: 'items' });

const options = {
  alter: true,
  beforeAssociate: async (sequelizeInstance) => {
    await List.init({}, { sequelize: sequelizeInstance });
    await List.sync();
  },
};

// Sincroniza os modelos com o banco de dados
sequelize.sync(options);

module.exports = models;
