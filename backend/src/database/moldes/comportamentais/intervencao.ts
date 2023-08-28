import { DataTypes, Model, Optional } from 'sequelize';
import db from '..';
import Comportamentais from './comportamental';

class IntervencaoComportamental extends Model {
    // static associate(models: any) {
    //     this.belongsTo(models.Comportamentais, { foreignKey: 'comportamentalId', as: 'comportamental' });
    // }
}

IntervencaoComportamental.init(
    {
        Adesao: DataTypes.STRING,
        Autocuidado: DataTypes.STRING,
        AbusoSubstancias: DataTypes.STRING,
        ProcessoSexualSexualidade: DataTypes.STRING,
        comportamentalId: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'IntervencaoComportamental',
        tableName: 'IntervencaoComportamental',
        timestamps: false, // Desativando timestamps automáticos
    }
);

IntervencaoComportamental.belongsTo(Comportamentais, { foreignKey: 'comportamentalId', as: 'comportamental' });
Comportamentais.hasMany(IntervencaoComportamental, { foreignKey: 'intervencoesId', as: 'intervencoes' });

export default IntervencaoComportamental;
