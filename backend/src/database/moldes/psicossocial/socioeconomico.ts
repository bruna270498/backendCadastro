import { DataTypes, Model } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial';

class Socioeconomico extends Model {
    id: any;
}

Socioeconomico.init(
    {
        rendaFamiliar: DataTypes.STRING,
        habitacao: DataTypes.STRING,
        acessoEducacao: DataTypes.BOOLEAN,
        dificuldadeFinanceira: DataTypes.BOOLEAN,
        especificarDificuldadeFinanceira: DataTypes.STRING,
        dificuldadeAlimentacao: DataTypes.BOOLEAN,
        dificuldadeExercicioFisico: DataTypes.BOOLEAN,
        dificuldadeMedicamentos: DataTypes.BOOLEAN,
        condicaoComprometeCuidadoCardiovascular: DataTypes.BOOLEAN,
        disposicaoMelhorarCondicao: DataTypes.BOOLEAN,
        IdPsicossocial: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'Socioeconomico',
        tableName: 'Socioeconomico',
        timestamps: false, // Desativando timestamps automáticos
    }
);
Socioeconomico.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(Socioeconomico, { foreignKey: 'socioeconomicoId', as: 'socioeconomico' });

export default Socioeconomico;
