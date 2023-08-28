import { DataTypes, Model, Optional } from 'sequelize';
import db from '..';
import Comportamentais from './comportamental';

class Autocuidado extends Model {
    [x: string]: any;
}

Autocuidado.init(
    {
        acoesExecutadas: DataTypes.STRING,
        capazExecutar: DataTypes.BOOLEAN,
        interesseExecutarAutocuidado: DataTypes.BOOLEAN,
        autoCuidadoComprometeSaudeCardiovascular: DataTypes.BOOLEAN,
        disposicaoManterAutocuidado: DataTypes.BOOLEAN,
        comportamentalId: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'Autocuidado',
        tableName: 'Autocuidado',
        timestamps: false, // Desativando timestamps automáticos
    }
);

Autocuidado.belongsTo(Comportamentais, { foreignKey: 'comportamentalId', as: 'comportamental' });
Comportamentais.hasMany(Autocuidado, { foreignKey: 'autocuidadoId', as: 'autocuidado' });


export default Autocuidado;
