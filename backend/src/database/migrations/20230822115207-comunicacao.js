'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comunicacao', {
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
      linguagemLibras: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      comunicacaoVerbal: {
        allowNull: true,
        type: Sequelize.STRING
      },
      comunicacaoNaoVerbal: {
        allowNull: true,
        type: Sequelize.STRING
      },
      comunicacaoFamiliar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      comunicacaoProfissional: {
        allowNull: true,
        type: Sequelize.STRING
      },
      comunicacaoProfissionalEspecificar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      barreirasComunicacao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      condicaoComprometeSaude: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarComunicacao: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Comunicacao');
  }
};
