import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class IntegracaoSocial extends Model {
    [x: string]: any;
}

IntegracaoSocial.init(
    {
        interacaoSocial: DataTypes.STRING,
        interacaoFamiliar: DataTypes.STRING,
        especificarInteracaoFamiliar: DataTypes.STRING,
        dificuldadeVinculo: DataTypes.STRING,
        especificarDificuldadeVinculo: DataTypes.STRING,
        amigosConvivioDiario: DataTypes.BOOLEAN,
        isolamentoSocial: DataTypes.BOOLEAN,
        sentimento: DataTypes.STRING,
        especificarSentimento: DataTypes.STRING,
        condicaoSocioFamiliarComprometeCuidadoCardiovascular: DataTypes.BOOLEAN,
        disposicaoMelhorarInteracao: DataTypes.BOOLEAN,
        IdPsicossocial: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'IntegracaoSocial',
        tableName: 'IntegracaoSocial',
        timestamps: false // Desativando timestamps automáticos
    }
);

IntegracaoSocial.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(IntegracaoSocial, { foreignKey: 'interacaoSocialId', as: 'interacaoSocial' });

export default IntegracaoSocial;
