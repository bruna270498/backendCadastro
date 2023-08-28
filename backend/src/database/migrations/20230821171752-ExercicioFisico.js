'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('ExercicioFisico', { 
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
      refereAtividade: {
        allowNull: true,
        type: Sequelize.STRING
      },
      outrasAtividade: {
        allowNull: true,
        type: Sequelize.STRING
      },
      habitoAtividadeFisica: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      tipoAtividadeFisica: {
        allowNull: true,
        type: Sequelize.STRING
      },
      habitoExercicioFisico: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      frequenciaExercicio: {
        allowNull: true,
        type: Sequelize.STRING
      },
      duracao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      intensidade: {
        allowNull: true,
        type: Sequelize.STRING
      },
      preferenciasExercicioFisico: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      fatorImpedeAtividade: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      especificarFatorImpossibilitaAtividadeFisic: {
        allowNull: true,
        type: Sequelize.STRING
      },
      estiloVida: {
        allowNull: true,
        type: Sequelize.STRING
      },
      capazExercitarSe: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      comprometeSaudeCardiovascularAtividadeFisica: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      manutencaoEstiloVidaAtivo: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.dropTable('ExercicioFisico');
  }
};
