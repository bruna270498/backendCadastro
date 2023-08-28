import { DataTypes, Model, Optional } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Comportamentais from './comportamental';

class SaudeSexual extends Model {
    [x: string]: any;
}

SaudeSexual.init(
    {
        funcaoSexual: DataTypes.STRING,
        usoHormonioSexual: DataTypes.STRING,
        correlacaoQuestaoCardiovascular: DataTypes.BOOLEAN,
        especificarCorrelacao: DataTypes.STRING,
        usoMedicacaoMelhorarFuncaoSexual: DataTypes.BOOLEAN,
        relacoesSexuaisPrejudicadaSobrepeso: DataTypes.BOOLEAN,
        condicaoCardiovascularComprometeSaudeSexual: DataTypes.BOOLEAN,
        disposicaoMelhorarProcessoSexual: DataTypes.BOOLEAN,
        comportamentalId: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'SaudeSexual',
        tableName: 'SaudeSexual',
        timestamps: false, // Desativando timestamps automáticos
    }
);

SaudeSexual.belongsTo(Comportamentais, { foreignKey: 'comportamentalId', as: 'comportamental' });
Comportamentais.hasMany(SaudeSexual, { foreignKey: 'saudeSexualId', as: 'saudeSexual' });


export default SaudeSexual;
