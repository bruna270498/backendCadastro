import { DataTypes, Model, Optional } from 'sequelize';
import db from '..';
import Comportamentais from './comportamental';

class DiagnosticoComportamental extends Model { }

DiagnosticoComportamental.init(
    {
        Adesao: DataTypes.STRING,
        Autocuidado: DataTypes.STRING,
        AbusoSubstancias: DataTypes.STRING,
        ProcessoSexualSexualidade: DataTypes.STRING,
        comportamentalId: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'DiagnosticoComportamental',
        tableName: 'DiagnosticoComportamental',
        timestamps: false, // Desativando timestamps automáticos
    }
);

DiagnosticoComportamental.belongsTo(Comportamentais, { foreignKey: 'comportamentalId', as: 'comportamental' });
Comportamentais.hasMany(DiagnosticoComportamental, { foreignKey: 'diagnosticoId', as: 'diagnostico' });


export default DiagnosticoComportamental;
