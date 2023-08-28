import { DataTypes, Model, Optional } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada

class Comportamentais extends Model {
    static associate(models: any) {
        this.hasMany(models.IntervencaoComportamental, { foreignKey: 'comportamentalId', as: 'intervencoes' });
        this.hasMany(models.DiagnosticoComportamental, { foreignKey: 'comportamentalId', as: 'diagnostico' });
        this.hasMany(models.SaudeSexual, { foreignKey: 'comportamentalId', as: 'saudeSexual' });
        this.hasMany(models.ExercicioFisico, { foreignKey: 'comportamentalId', as: 'exercicio' });
        this.hasMany(models.Autocuidado, { foreignKey: 'comportamentalId', as: 'autocuidado' });
        this.hasMany(models.Adesao, { foreignKey: 'comportamentalId', as: 'adesao' });
        this.hasMany(models.AbusoSubstancias, { foreignKey: 'comportamentalId', as: 'abusoSubstancias' });
    }
}

Comportamentais.init(
    {
        peso: DataTypes.DOUBLE,
        altura: DataTypes.DOUBLE,
        pesoAtual: DataTypes.DOUBLE,
        elevacaoPeso: DataTypes.BOOLEAN,
        IMC: DataTypes.STRING,
        apetite: DataTypes.STRING,
        frequencia: DataTypes.STRING,
        ganhoSubitoPeso: DataTypes.BOOLEAN,
        fatorDesencadeador: DataTypes.BOOLEAN,
        especificarFator: DataTypes.STRING,
        consome: DataTypes.STRING,
        comprometeSaudeCardiovascular: DataTypes.BOOLEAN,
        melhoriaHabitosAlimentares: DataTypes.BOOLEAN,
        abusoSubstanciasId: DataTypes.INTEGER,
        adesaoId: DataTypes.INTEGER,
        autocuidadoId: DataTypes.INTEGER,
        diagnosticoId: DataTypes.INTEGER,
        exercicioId: DataTypes.INTEGER,
        intervencoesId: DataTypes.INTEGER,
        saudeSexualId: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'Comportamentais',
        tableName: 'Comportamentais',
        timestamps: false, // Desativando timestamps automáticos
    }
);

export default Comportamentais;
