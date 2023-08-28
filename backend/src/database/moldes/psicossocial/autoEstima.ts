import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class Autoestima extends Model {
    [x: string]: any;
}

Autoestima.init(
    {
        autoestimaOpiniao: DataTypes.STRING,
        aceitaElogiosSugestoes: DataTypes.BOOLEAN,
        autoestimaReferida: DataTypes.STRING,
        negligenciaSaude: DataTypes.BOOLEAN,
        especifiqueNegligencia: DataTypes.STRING,
        baixaAutoestimaComprometeCuidado: DataTypes.BOOLEAN,
        disposicaoMelhorarAutoestima: DataTypes.BOOLEAN,
        IdPsicossocial: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'Autoestima',
        tableName: 'Autoestima',
        timestamps: false // Desativando timestamps automáticos
    }
);
Autoestima.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(Autoestima, { foreignKey: 'autoEstimaId', as: 'autoEstima' });

export default Autoestima;
