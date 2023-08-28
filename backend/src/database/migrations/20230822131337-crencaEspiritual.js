'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CrencaEspiritual', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      angustiaSinaisSintomas: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especificarAngustia: {
        allowNull: true,
        type: Sequelize.STRING
      },
      angustiaSinaisSintomasEspirituais: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especificarAngustiaEspiritual: {
        allowNull: true,
        type: Sequelize.STRING
      },
      bemEstarEspiritual: {
        allowNull: true,
        type: Sequelize.STRING
      },
      crencaEspiritualComprometeCuidado: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoMelhorarCrencaEspiritual: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      crencaEspirirualEspecifica: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especificarCrencaEspirirual: {
        allowNull: true,
        type: Sequelize.STRING
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CrencaEspiritual');
  }
};
