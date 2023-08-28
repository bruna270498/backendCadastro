import { DataTypes, Model, Optional } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Psicossocial from './psicossocial'; // Importe o modelo Psicossocial


class Comunicacao extends Model {
    [x: string]: any;
}

Comunicacao.init(
    {
        IdPsicossocial: DataTypes.INTEGER,
        linguagemLibras: DataTypes.BOOLEAN,
        comunicacaoVerbal: DataTypes.STRING,
        comunicacaoNaoVerbal: DataTypes.STRING,
        comunicacaoFamiliar: DataTypes.STRING,
        comunicacaoProfissional: DataTypes.STRING,
        comunicacaoProfissionalEspecificar: DataTypes.STRING,
        barreirasComunicacao: DataTypes.STRING,
        condicaoComprometeSaude: DataTypes.BOOLEAN,
        disposicaoMelhorarComunicacao: DataTypes.BOOLEAN
    },
    {
        sequelize: db,
        modelName: 'Comunicacao',
        tableName: 'Comunicacao',
        timestamps: false // Desativando timestamps automáticos
    }
);

Comunicacao.belongsTo(Psicossocial, { foreignKey: 'IdPsicossocial', as: 'psicossocial' });
Psicossocial.hasMany(Comunicacao, { foreignKey: 'comunicacaoId', as: 'comunicacao' });
export default Comunicacao;
