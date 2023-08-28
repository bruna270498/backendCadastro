'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DiagnosticoPsicossocial', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Conhecimento: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      comunicao: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      adaptacao: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      socioeconomico: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      relacaoInterpessoal: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      saudeEmocional: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      autoestima: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      autoimagem: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      crencaEspiritual: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      crencaReligiosa: {
        allowNull: true,
        type: Sequelize.STRING,
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
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DiagnosticoPsicossocial');
  },
};
