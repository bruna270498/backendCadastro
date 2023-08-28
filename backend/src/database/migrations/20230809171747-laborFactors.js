'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('LaborFactors', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sono: {
        type: Sequelize.STRING,
        allowNull: false
      },
      motivoSonoPrejudicado: {
        type: Sequelize.STRING,
        allowNull: true
      },
      usoMedicamentoDormir: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      especificarUsoMedicamento: {
        type: Sequelize.STRING,
        allowNull: true
      },
      horasSonoPorDia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fatoresInterferemSono: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sonoComprometeSaudeCardiovascular: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      disposicaoMelhorarHabitosSono: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      DiagnosticosEnfermagem: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ResultadosEnfermagem: {
        type: Sequelize.STRING,
        allowNull: true,
      }
     });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('LaborFactors');
  }
};
