'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Psicossocial', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buscaServicoSaude: {
        allowNull: true,
        type: Sequelize.STRING
      },
      procurouServicoCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      capazMonitorarSaudeCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      capazManejarRegime: {
        allowNull: true,
        type: Sequelize.STRING
      },
      conheceEstrategiasReduzirRisco: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      conheceRegimePrescrito: {
        allowNull: true,
        type: Sequelize.STRING
      },
      quaisRegimes: {
        allowNull: true,
        type: Sequelize.STRING
      },
      barreirasConhecimentoRegime: {
        allowNull: true,
        type: Sequelize.STRING
      },
      outrasBarreiras: {
        allowNull: true,
        type: Sequelize.STRING
      },
      EspecificarBarreiras: {
        allowNull: true,
        type: Sequelize.STRING
      },
      reproduzInformacoesRegime: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      educacaoSaudeComprometeSaude: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoAprenderRegime: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      aceitacaoAdaptacaoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'aceitacaoAdaptacaoId'
      },
      autoEstimaId: {
        type: Sequelize.INTEGER,
        foreignKey: 'autoEstimaId'
      },
      autoImagemId: {
        type: Sequelize.INTEGER,
        foreignKey: 'autoImagemId'
      },
      comunicacaoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'comunicacaoId'
      },
      crencaEspiritualId: {
        type: Sequelize.INTEGER,
        foreignKey: 'crencaEspiritualId'
      },
      crencaReligiosaId: {
        type: Sequelize.INTEGER,
        foreignKey: 'crencaReligiosaId'
      },
      diagnosticoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'diagnosticoId'
      },
      interacaoSocialId: {
        type: Sequelize.INTEGER,
        foreignKey: 'interacaoSocialId'
      },
      saudeEmocionalId: {
        type: Sequelize.INTEGER,
        foreignKey: 'saudeEmocionalId'
      },
      socioeconomicoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'socioeconomicoId'
      },
      intervencaoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'intervencaoId'
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Psicossocial');
  }
};
