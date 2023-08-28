import { DataTypes, Model, Optional } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada

class FatoresCardiometabolico extends Model {
    static associate(models: any) {
        this.hasMany(models.DiagnosticoCardiometabolico, {
            foreignKey: 'cardiometabolicoId', // Nome da coluna de chave estrangeira em diagnosticoCardiometabolico
            as: 'diagnostico',
        });

        this.hasMany(models.FuncaoMetabolica, {
            foreignKey: 'cardiometabolicoId', // Nome da coluna de chave estrangeira em FuncaoMetabolica
            as: 'funcaoMetabolica',
        });

        this.hasMany(models.intervencaoCardiometabolico, {
            foreignKey: 'cardiometabolicoId', // Nome da coluna de chave estrangeira em intervencaoCardiometabolico
            as: 'intervencao',
        });
    }
}

FatoresCardiometabolico.init({
    historicoArterial: DataTypes.STRING,
    Pressaoarterial: DataTypes.STRING,
    FrequenciaCardiaca: DataTypes.STRING,
    usaAntiHipertensivo: DataTypes.BOOLEAN,
    NomeDoAntiHipertensivo: DataTypes.STRING,
    HistoricoFamiliarDoencas: DataTypes.STRING,
    NomeOutrasDoencas: DataTypes.STRING,
    HistoricoFamiliarOutrosPeso: DataTypes.BOOLEAN,
    HistoricoFamiliarOutrosPesoInput: DataTypes.STRING,
    EvidenciaLaboratorial: DataTypes.STRING,
    SintomasElevacaoArterial: DataTypes.STRING,
    CondicaoCardiovascularComprometeSaude: DataTypes.BOOLEAN,
    disposicaoMelhorarFuncaoCardiovascular: DataTypes.BOOLEAN,
    funcaoMetabolicaId: DataTypes.INTEGER,
    diagnosticoId: DataTypes.INTEGER,
    intervencaoId: DataTypes.INTEGER,
}, {
    sequelize: db,
    timestamps: false,
    modelName: 'FatoresCardiometabolico',
    tableName: 'FatoresCardiometabolico',
});

export default FatoresCardiometabolico;