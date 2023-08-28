import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class AceitacaoAdaptacao extends Model {
    id: any;
}

AceitacaoAdaptacao.init(
    {
        reconheceRiscoCardiovascular: DataTypes.STRING,
        associaHabitosRiscoCardiovascular: DataTypes.STRING,
        atitudeCuidadoCardiovascular: DataTypes.STRING,
        adaptacaoCondicaoRiscoCardiovascular: DataTypes.STRING,
        condicaoComprometeSaudeCardiovascular: DataTypes.BOOLEAN,
        disposicaoMelhorarAdaptacao: DataTypes.BOOLEAN,
        IdPsicossocial: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'AceitacaoAdaptacao',
        tableName: 'AceitacaoAdaptacao',
        timestamps: false, // Desativando timestamps automáticos
    }
);
AceitacaoAdaptacao.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(AceitacaoAdaptacao, { foreignKey: 'aceitacaoAdaptacaoId', as: 'aceitacaoAdaptacao' });

export default AceitacaoAdaptacao;
