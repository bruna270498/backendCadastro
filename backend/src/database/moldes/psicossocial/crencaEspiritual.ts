import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class CrencaEspiritual extends Model {
    [x: string]: any;
}

CrencaEspiritual.init(
    {
        angustiaSinaisSintomas: DataTypes.BOOLEAN,
        especificarAngustia: DataTypes.STRING,
        angustiaSinaisSintomasEspirituais: DataTypes.BOOLEAN,
        especificarAngustiaEspiritual: DataTypes.STRING,
        bemEstarEspiritual: DataTypes.STRING,
        crencaEspiritualComprometeCuidado: DataTypes.BOOLEAN,
        disposicaoMelhorarCrencaEspiritual: DataTypes.BOOLEAN,
        crencaEspirirualEspecifica: DataTypes.BOOLEAN,
        especificarCrencaEspirirual: DataTypes.STRING,
        IdPsicossocial: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'CrencaEspiritual',
        tableName: 'CrencaEspiritual',
        timestamps: false // Desativando timestamps automáticos
    }
);
CrencaEspiritual.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(CrencaEspiritual, { foreignKey: 'crencaEspiritualId', as: 'crencaEspiritual' });

export default CrencaEspiritual;
