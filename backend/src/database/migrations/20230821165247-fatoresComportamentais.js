'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('Comportamentais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      peso: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      altura: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      pesoAtual: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      elevacaoPeso: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      IMC: {
        allowNull: true,
        type: Sequelize.STRING
      },
      apetite: {
        allowNull: true,
        type: Sequelize.STRING
      },
      frequencia: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ganhoSubitoPeso: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      fatorDesencadeador: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      especificarFator: {
        allowNull: true,
        type: Sequelize.STRING
      },
      consome: {
        allowNull: true,
        type: Sequelize.STRING
      },
      comprometeSaudeCardiovascular: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      melhoriaHabitosAlimentares: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      abusoSubstanciasId:  {
        type: Sequelize.INTEGER,
        foreignKey: 'abusoSubstanciasId'
      }, 
      adesaoId:{
        type: Sequelize.INTEGER,
        foreignKey: 'adesaoId'
      }, 
      autocuidadoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'autocuidadoId'
      }, 
      diagnosticoId: {
        type: Sequelize.INTEGER,
        foreignKey: 'diagnosticoId'
      }, 
      exercicioId: {
        type: Sequelize.INTEGER,
        foreignKey: 'exercicioId'
      }, 
      intervencoesId: {
        type: Sequelize.INTEGER,
        foreignKey: 'intervencoesId'
      }, 
      saudeSexualId : {
        type: Sequelize.INTEGER,
        foreignKey: 'saudeSexualId'
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Comportamentais');
  }
};
