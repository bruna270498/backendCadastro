'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('IntegracaoSocial', {
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
      interacaoSocial: {
        allowNull: true,
        type: Sequelize.STRING
      },
      interacaoFamiliar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      especificarInteracaoFamiliar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dificuldadeVinculo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      especificarDificuldadeVinculo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      amigosConvivioDiario: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isolamentoSocial: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      sentimento: {
        allowNull: true,
        type: Sequelize.STRING
      },
      especificarSentimento: {
        allowNull: true,
        type: Sequelize.STRING
      },
      condicaoSocioFamiliarComprometeCuidadoCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarInteracao: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('IntegracaoSocial');
  }
};
