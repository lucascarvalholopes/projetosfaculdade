const sequelize = require('../database'); // Corrigir o caminho do arquivo database
const Item = require('./Agenda');
const List = require('./Paciente');

const models = {
  List,
  Item
};

Item.belongsTo(List, { foreignKey: 'listId', as: 'list' });
List.hasMany(Item, { foreignKey: 'listId', as: 'items' });

const options = {
  alter: true,
  beforeAssociate: async (sequelizeInstance) => {
    await List.init({}, { sequelize: sequelizeInstance });
    await List.sync();
  },
};

sequelize.sync(options);

module.exports = models;
