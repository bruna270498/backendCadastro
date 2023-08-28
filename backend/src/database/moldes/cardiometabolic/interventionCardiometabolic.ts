import { DataTypes, Model, Optional } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Intervencao from '../../../interface/registration/cardiometabolic/intervencao';
import FatoresCardiometabolico from './cardiometabolic';


class intervencaoCardiometabolico extends Model {
    id: any;
}

intervencaoCardiometabolico.init(
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
        tableName: 'intervencaoCardiometabolico',
        modelName: 'intervencaoCardiometabolico',
    }
);
intervencaoCardiometabolico.belongsTo(FatoresCardiometabolico, { foreignKey: 'cardiometabolicoId', as: 'cardiometabolico' });
FatoresCardiometabolico.hasMany(intervencaoCardiometabolico, { foreignKey: 'intervencaoId', as: 'intervencao' });

export default intervencaoCardiometabolico;
