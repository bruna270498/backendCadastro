'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Autoimagem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      autoimagemOpiniao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      relatoAutoimagem: {
        allowNull: true,
        type: Sequelize.STRING
      },
      sobrepesoComprometeAutoimagem: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      autoimagemNegativaComprometeCuidado: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarAutoimagem: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      IdPsicossocial: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Psicossocial',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Autoimagem');
  }
};
