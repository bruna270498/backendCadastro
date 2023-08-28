'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FuncaoMetabolica', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardiometabolicoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'FatoresCardiometabolico', // Nome da tabela de destino
          key: 'id' // Coluna na tabela de destino sendo referenciada
        },
        onUpdate: 'CASCADE', // Ação em caso de atualização na tabela de destino
        onDelete: 'CASCADE' // Ação em caso de exclusão na tabela de destino
      },
      examesLaboratoriais: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Glicemia: {
        allowNull: true,
        type: Sequelize.STRING
      },
      abdominal: {
        allowNull: true,
        type: Sequelize.STRING
      },
      LDLc: {
        allowNull: true,
        type: Sequelize.STRING
      },
      HDLc: {
        allowNull: true,
        type: Sequelize.STRING
      },
      colesterol: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Triglicerideos: {
        allowNull: true,
        type: Sequelize.STRING
      },
      historicoFamiliarPeso: {
        allowNull: true,
        type: Sequelize.STRING
      },
      apresentaSindromeMetabolica: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      EvidenciaLaboratorial: {
        allowNull: true,
        type: Sequelize.STRING
      },
      comprometeCondicaoCardiometabolica: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarParametrosClinicos: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('FuncaoMetabolica');
  }
};
