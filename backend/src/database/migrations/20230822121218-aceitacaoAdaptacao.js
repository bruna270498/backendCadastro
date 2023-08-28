'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AceitacaoAdaptacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IdPsicossocial: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Psicossocial",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      reconheceRiscoCardiovascular: {
        allowNull: true,
        type: Sequelize.STRING
      },
      associaHabitosRiscoCardiovascular: {
        allowNull: true,
        type: Sequelize.STRING
      },
      atitudeCuidadoCardiovascular: {
        allowNull: true,
        type: Sequelize.STRING
      },
      adaptacaoCondicaoRiscoCardiovascular: {
        allowNull: true,
        type: Sequelize.STRING
      },
      condicaoComprometeSaudeCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarAdaptacao: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('AceitacaoAdaptacao');
  }
};
