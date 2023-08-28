import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class CrencaReligiosa extends Model {
    [x: string]: any;
}

CrencaReligiosa.init(
    {
        conflitoReligioso: DataTypes.BOOLEAN,
        especificarConflitoReligioso: DataTypes.STRING,
        enfrentamentoReligioso: DataTypes.STRING,
        disposicaoMelhorarCrencaReligiosa: DataTypes.BOOLEAN,
        crencaReligiosaEspecifica: DataTypes.BOOLEAN,
        especificarCrencaReligiosa: DataTypes.STRING,
        crencaReligiosaComprometeCuidado: DataTypes.BOOLEAN,
        IdPsicossocial: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'CrencaReligiosa',
        tableName: 'CrencaReligiosa',
        timestamps: false
    }
);
CrencaReligiosa.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(CrencaReligiosa, { foreignKey: 'crencaReligiosaId', as: 'crencaReligiosa' });

export default CrencaReligiosa;
