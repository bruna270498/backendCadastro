import { DataTypes, Model } from 'sequelize';
import db from '../'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class Autoimagem extends Model { }

Autoimagem.init(
    {
        autoimagemOpiniao: DataTypes.STRING,
        relatoAutoimagem: DataTypes.STRING,
        sobrepesoComprometeAutoimagem: DataTypes.BOOLEAN,
        autoimagemNegativaComprometeCuidado: DataTypes.BOOLEAN,
        disposicaoMelhorarAutoimagem: DataTypes.BOOLEAN,
        IdPsicossocial: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'Autoimagem',
        tableName: 'Autoimagem',
        timestamps: false // Desativando timestamps automáticos
    }
);
Autoimagem.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(Autoimagem, { foreignKey: 'autoImagemId', as: 'autoImagem' });

export default Autoimagem;
