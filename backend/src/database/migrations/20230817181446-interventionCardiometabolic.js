'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('intervencaoCardiometabolico', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardiometabolicoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'FatoresCardiometabolico', // Nome da tabela de destino
          key: 'id' // Coluna na tabela de destino sendo referenciada
        },
        onUpdate: 'CASCADE', // Ação em caso de atualização na tabela de destino
        onDelete: 'CASCADE' // Ação em caso de exclusão na tabela de destino
      },
      nutricao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      atividadeFisica: {
        allowNull: true,
        type: Sequelize.STRING
      },
      funcaoCardiovascular: {
        allowNull: true,
        type: Sequelize.STRING
      },
      funcaoMetabolica: {
        allowNull: true,
        type: Sequelize.STRING
      }
    });
    
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('intervencaoCardiometabolico');
    
  }
};
