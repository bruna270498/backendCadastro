'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('Afeccious', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      apresentaLesoes: {
        type: Sequelize.STRING,
        allowNull: true
      },
        condicaoIntegridadeFisicaComprometeSaudeCardiovascular: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
        disposicaoMonitorarSinaisSintomasLesaoCardiovascular: {
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
   
    await queryInterface.dropTable('Afeccious');

  }
};
