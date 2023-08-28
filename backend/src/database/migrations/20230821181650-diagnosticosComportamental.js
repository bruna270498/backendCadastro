'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DiagnosticoComportamental', {
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
      Adesao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Autocuidado: {
        allowNull: true,
        type: Sequelize.STRING
      },
      AbusoSubstancias: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ProcessoSexualSexualidade: {
        allowNull: true,
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('DiagnosticoComportamental');
  }
};
