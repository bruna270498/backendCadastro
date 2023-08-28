'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Autoestima', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      autoestimaOpiniao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      aceitaElogiosSugestoes: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      autoestimaReferida: {
        allowNull: true,
        type: Sequelize.STRING
      },
      negligenciaSaude: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especifiqueNegligencia: {
        allowNull: true,
        type: Sequelize.STRING
      },
      baixaAutoestimaComprometeCuidado: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarAutoestima: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      IdPsicossocial: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Psicossocial",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Autoestima');
  }
};
