import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class SaudeEmocional extends Model {
    id: any;
}

SaudeEmocional.init(
    {
        apoioFamiliar: DataTypes.STRING,
        problemasRelacaoFamiliar: DataTypes.BOOLEAN,
        especificarProblemasRelacaoFamiliar: DataTypes.STRING,
        historicoProblemasEmocionais: DataTypes.BOOLEAN,
        especificarHistoricoProblemasEmocionais: DataTypes.STRING,
        pessoaAnsiosa: DataTypes.BOOLEAN,
        estresse: DataTypes.BOOLEAN,
        humorAnsioso: DataTypes.STRING,
        tensao: DataTypes.STRING,
        insonia: DataTypes.STRING,
        humorDepressivo: DataTypes.STRING,
        sintomasGerais: DataTypes.STRING,
        estadoEmocionalConsulta: DataTypes.STRING,
        ansiedade1: DataTypes.BOOLEAN,
        grauAnsiedade: DataTypes.STRING,
        ansiedadeComprometeCuidadoCardiovascular: DataTypes.BOOLEAN,
        faltaApoioFamiliarComprometeCuidadoCardiovascular: DataTypes.BOOLEAN,
        disposicaoMelhorarSegurancaEmocional: DataTypes.BOOLEAN,
        IdPsicossocial: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'SaudeEmocional',
        tableName: 'SaudeEmocional',
        timestamps: false, // Desativando timestamps automáticos
    }
);
SaudeEmocional.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(SaudeEmocional, { foreignKey: 'saudeEmocionalId', as: 'saudeEmocional' });

export default SaudeEmocional;
