import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class DiagnosticoPsicossocial extends Model {
    [x: string]: any;
}

DiagnosticoPsicossocial.init(
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
        modelName: 'DiagnosticoPsicossocial',
        tableName: 'DiagnosticoPsicossocial',
        timestamps: false, // Desativando timestamps automáticos
    }
);
DiagnosticoPsicossocial.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(DiagnosticoPsicossocial, { foreignKey: 'diagnosticoId', as: 'diagnostico' });

export default DiagnosticoPsicossocial;
