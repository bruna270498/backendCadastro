'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('Adesao', { 
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
      acompanhamentoMultiprofissional: {
        allowNull: true,
        type: Sequelize.STRING
      },
      usoMedicacaoCardiovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      especificarMedicacaoCardiovascular: {
        allowNull: true,
        type: Sequelize.STRING
      },
      abandonouTratamento: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      motivoAbandonoTratamento: {
        allowNull: true,
        type: Sequelize.STRING
      },
      aceitaRotinaCuidados: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      rotinaCuidados: {
        allowNull: true,
        type: Sequelize.STRING
      },
      armazenamentoMedicamentos: {
        allowNull: true,
        type: Sequelize.STRING
      },
      rotinaUsoMedicamentos: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dificuldadesRotinaMedicamentosa: {
        allowNull: true,
        type: Sequelize.STRING
      },
      outrasDificuldadesRotinaMedicamentosa: {
        allowNull: true,
        type: Sequelize.STRING
      },
      desenvolveRotinaCuidados: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      cuidadosRotina: {
        allowNull: true,
        type: Sequelize.STRING
      },
      formaSeguimentoTerapeutico: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      disposicaoManterRotina: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      naoAdesao: {
        allowNull: true,
        type: Sequelize.STRING
      },
     });
  },

  down: async (queryInterface, _Sequelize) => {
 
    await queryInterface.dropTable('Adesao');
  }
};
