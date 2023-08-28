'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Socioeconomico', {
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
      rendaFamiliar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      habitacao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      acessoEducacao: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dificuldadeFinanceira: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especificarDificuldadeFinanceira: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dificuldadeAlimentacao: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dificuldadeExercicioFisico: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dificuldadeMedicamentos: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      condicaoComprometeCuidadoCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarCondicao: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Socioeconomico');
  }
};
