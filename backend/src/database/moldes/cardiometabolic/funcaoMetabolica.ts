'use strict';
import { DataTypes, Model, Optional } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import metabolica from '../../../interface/registration/cardiometabolic/funcaoMetabolic';
import FatoresCardiometabolico from './cardiometabolic';

class FuncaoMetabolica extends Model {
    id: any;
}

FuncaoMetabolica.init(
    {
        examesLaboratoriais: DataTypes.STRING,
        Glicemia: DataTypes.STRING,
        abdominal: DataTypes.STRING,
        LDLc: DataTypes.STRING,
        HDLc: DataTypes.STRING,
        colesterol: DataTypes.STRING,
        Triglicerideos: DataTypes.STRING,
        historicoFamiliarPeso: DataTypes.STRING,
        apresentaSindromeMetabolica: DataTypes.BOOLEAN,
        EvidenciaLaboratorial: DataTypes.STRING,
        comprometeCondicaoCardiometabolica: DataTypes.BOOLEAN,
        disposicaoMelhorarParametrosClinicos: DataTypes.BOOLEAN,
        cardiometabolicoId: DataTypes.INTEGER
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: 'FuncaoMetabolica',
        tableName: 'FuncaoMetabolica',
    }
);
FuncaoMetabolica.belongsTo(FatoresCardiometabolico, { foreignKey: 'cardiometabolicoId', as: 'cardiometabolico' });
FatoresCardiometabolico.hasMany(FuncaoMetabolica, { foreignKey: 'funcaoMetabolicaId', as: 'funcaoMetabolica' });

export default FuncaoMetabolica;
