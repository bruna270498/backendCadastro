'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Autocuidado', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comportamentalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Comportamentais",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      acoesExecutadas: {
        allowNull: true,
        type: Sequelize.STRING
      },
      capazExecutar: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      interesseExecutarAutocuidado: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      autoCuidadoComprometeSaudeCardiovascular: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      disposicaoManterAutocuidado: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Autocuidado');
  }
};
