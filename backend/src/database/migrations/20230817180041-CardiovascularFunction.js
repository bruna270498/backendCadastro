'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FatoresCardiometabolico', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      funcaoMetabolicaId: {
        type: Sequelize.INTEGER,
        foreignKey: 'funcaoMetabolicaId'
      },
      diagnosticoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'diagnosticoId'
      },
      intervencaoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'intervencaoId'
      },
      historicoArterial: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Pressaoarterial: {
        allowNull: true,
        type: Sequelize.STRING
      },
      FrequenciaCardiaca: {
        allowNull: true,
        type: Sequelize.STRING
      },
      usaAntiHipertensivo:{
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      NomeDoAntiHipertensivo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      HistoricoFamiliarDoencas: {
        allowNull: true,
        type: Sequelize.STRING
      },
      NomeOutrasDoencas:{
        allowNull: true,
        type: Sequelize.STRING
      },
      HistoricoFamiliarOutrosPeso: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      HistoricoFamiliarOutrosPesoInput: {
        allowNull: true,
        type: Sequelize.STRING
      },
      EvidenciaLaboratorial: {
        allowNull: true,
        type: Sequelize.STRING
      },
      SintomasElevacaoArterial: {
        allowNull: true,
        type: Sequelize.STRING
      },
      CondicaoCardiovascularComprometeSaude: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarFuncaoCardiovascular: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('FatoresCardiometabolico');
  }
};