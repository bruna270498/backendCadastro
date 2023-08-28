import { DataTypes, Model, Optional } from 'sequelize';
import db from '..';
import Comportamentais from './comportamental';

class Adesao extends Model {
    id: any;
}

Adesao.init(
    {
        acompanhamentoMultiprofissional: DataTypes.STRING,
        usoMedicacaoCardiovascular: DataTypes.BOOLEAN,
        especificarMedicacaoCardiovascular: DataTypes.STRING,
        abandonouTratamento: DataTypes.BOOLEAN,
        motivoAbandonoTratamento: DataTypes.STRING,
        aceitaRotinaCuidados: DataTypes.BOOLEAN,
        rotinaCuidados: DataTypes.STRING,
        armazenamentoMedicamentos: DataTypes.STRING,
        rotinaUsoMedicamentos: DataTypes.STRING,
        dificuldadesRotinaMedicamentosa: DataTypes.STRING,
        outrasDificuldadesRotinaMedicamentosa: DataTypes.STRING,
        desenvolveRotinaCuidados: DataTypes.BOOLEAN,
        cuidadosRotina: DataTypes.STRING,
        formaSeguimentoTerapeutico: DataTypes.BOOLEAN,
        disposicaoManterRotina: DataTypes.BOOLEAN,
        naoAdesao: DataTypes.STRING,
        comportamentalId: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'Adesao',
        tableName: 'Adesao',
        timestamps: false, // Desativando timestamps automáticos
    }
);

Adesao.belongsTo(Comportamentais, { foreignKey: 'comportamentalId', as: 'comportamental' });
Comportamentais.hasMany(Adesao, { foreignKey: 'adesaoId', as: 'adesao' });


export default Adesao;
