'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AbusoSubstancias', {
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
      usoSubstancia: {
        allowNull: true,
        type: Sequelize.STRING
      },
      historicoFamiliarTabagismo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      frequenciaUso: {
        allowNull: true,
        type: Sequelize.STRING
      },
      percebeComoProblema: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      pretendeMudarComportamento: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      JaFezAlgumTratamento: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      usoOcasionouDesconfortoCardiaco: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      UsoComprometeSaudeCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dispostoMudarHabitos: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('AbusoSubstancias');
  }
};
