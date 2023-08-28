'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SaudeEmocional', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      apoioFamiliar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      problemasRelacaoFamiliar: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especificarProblemasRelacaoFamiliar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      historicoProblemasEmocionais: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especificarHistoricoProblemasEmocionais: {
        allowNull: true,
        type: Sequelize.STRING
      },
      pessoaAnsiosa: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      estresse: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      humorAnsioso: {
        allowNull: true,
        type: Sequelize.STRING
      },
      tensao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      insonia: {
        allowNull: true,
        type: Sequelize.STRING
      },
      humorDepressivo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      sintomasGerais: {
        allowNull: true,
        type: Sequelize.STRING
      },
      estadoEmocionalConsulta: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ansiedade1: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      grauAnsiedade: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ansiedadeComprometeCuidadoCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      faltaApoioFamiliarComprometeCuidadoCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarSegurancaEmocional: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('SaudeEmocional');
  }
};
