import { DataTypes, Model, Optional } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Intervencao from '../../../interface/registration/cardiometabolic/intervencao';
import FatoresCardiometabolico from './cardiometabolic';



class DiagnosticoCardiometabolico extends Model {
    [x: string]: any;
}

DiagnosticoCardiometabolico.init(
    {
        nutricao: DataTypes.STRING,
        atividadeFisica: DataTypes.STRING,
        funcaoCardiovascular: DataTypes.STRING,
        funcaoMetabolica: DataTypes.STRING,
        cardiometabolicoId: DataTypes.INTEGER
    },
    {
        sequelize: db,
        timestamps: false,
        tableName: 'DiagnosticoCardiometabolico',
        modelName: 'DiagnosticoCardiometabolico',
    }
);
DiagnosticoCardiometabolico.belongsTo(FatoresCardiometabolico, { foreignKey: 'cardiometabolicoId', as: 'cardiometabolico' });
FatoresCardiometabolico.hasMany(DiagnosticoCardiometabolico, { foreignKey: 'diagnosticoId', as: 'diagnostico' });

export default DiagnosticoCardiometabolico;
