'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CrencaReligiosa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      conflitoReligioso: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      especificarConflitoReligioso: {
        allowNull: true,
        type: Sequelize.STRING
      },
      enfrentamentoReligioso: {
        allowNull: true,
        type: Sequelize.STRING
      },
      disposicaoMelhorarCrencaReligiosa: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      crencaReligiosaEspecifica: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      especificarCrencaReligiosa: {
        allowNull: true,
        type: Sequelize.STRING
      },
      crencaReligiosaComprometeCuidado: {
        allowNull: true,
        type: Sequelize.BOOLEAN
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
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('CrencaReligiosa');
  }
};
