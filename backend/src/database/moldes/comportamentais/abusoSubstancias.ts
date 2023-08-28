import { DataTypes, Model, Optional } from 'sequelize';
import db from '..';
import Comportamentais from './comportamental';

class AbusoSubstancias extends Model { }

AbusoSubstancias.init(
    {
        usoSubstancia: DataTypes.STRING,
        historicoFamiliarTabagismo: DataTypes.STRING,
        frequenciaUso: DataTypes.STRING,
        percebeComoProblema: DataTypes.BOOLEAN,
        pretendeMudarComportamento: DataTypes.BOOLEAN,
        JaFezAlgumTratamento: DataTypes.BOOLEAN,
        usoOcasionouDesconfortoCardiaco: DataTypes.BOOLEAN,
        UsoComprometeSaudeCardiovascular: DataTypes.BOOLEAN,
        dispostoMudarHabitos: DataTypes.BOOLEAN,
        comportamentalId: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'AbusoSubstancias',
        tableName: 'AbusoSubstancias',
        timestamps: false, // Desativando timestamps automáticos
    }
);

AbusoSubstancias.belongsTo(Comportamentais, { foreignKey: 'comportamentalId', as: 'comportamental' });
Comportamentais.hasMany(AbusoSubstancias, { foreignKey: 'abusoSubstanciasId', as: 'abusoSubstancias' });

export default AbusoSubstancias;
