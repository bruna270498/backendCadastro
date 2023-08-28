'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SaudeSexual', {
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
      funcaoSexual: {
        allowNull: false,
        type: Sequelize.STRING
      },
      usoHormonioSexual: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correlacaoQuestaoCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especificarCorrelacao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      usoMedicacaoMelhorarFuncaoSexual: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      relacoesSexuaisPrejudicadaSobrepeso: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      condicaoCardiovascularComprometeSaudeSexual: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarProcessoSexual: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SaudeSexual');
  }
};
