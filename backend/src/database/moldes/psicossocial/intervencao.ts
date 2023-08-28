import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class IntervencaoPsicossocial extends Model {
    id: any;
}

IntervencaoPsicossocial.init(
    {
        Conhecimento: DataTypes.STRING,
        comunicao: DataTypes.STRING,
        adaptacao: DataTypes.STRING,
        socioeconomico: DataTypes.STRING,
        relacaoInterpessoal: DataTypes.STRING,
        saudeEmocional: DataTypes.STRING,
        autoestima: DataTypes.STRING,
        autoimagem: DataTypes.STRING,
        crencaEspiritual: DataTypes.STRING,
        crencaReligiosa: DataTypes.STRING,
        IdPsicossocial: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'IntervencaoPsicossocial',
        tableName: 'IntervencaoPsicossocial',
        timestamps: false, // Desativando timestamps automáticos
    }
);
IntervencaoPsicossocial.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(IntervencaoPsicossocial, { foreignKey: 'intervencaoId', as: 'intervencao' });

export default IntervencaoPsicossocial;
