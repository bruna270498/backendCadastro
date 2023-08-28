import { DataTypes, Model, Optional } from 'sequelize';
import db from '..'; // Importe a instância do Sequelize já configurada
import Comportamentais from './comportamental';

class ExercicioFisico extends Model { }

ExercicioFisico.init(
    {
        refereAtividade: DataTypes.STRING,
        outrasAtividade: DataTypes.STRING,
        habitoAtividadeFisica: DataTypes.BOOLEAN,
        tipoAtividadeFisica: DataTypes.STRING,
        habitoExercicioFisico: DataTypes.BOOLEAN,
        frequenciaExercicio: DataTypes.STRING,
        duracao: DataTypes.STRING,
        intensidade: DataTypes.STRING,
        preferenciasExercicioFisico: DataTypes.BOOLEAN,
        fatorImpedeAtividade: DataTypes.BOOLEAN,
        especificarFatorImpossibilitaAtividadeFisic: DataTypes.STRING,
        estiloVida: DataTypes.STRING,
        capazExercitarSe: DataTypes.BOOLEAN,
        comprometeSaudeCardiovascularAtividadeFisica: DataTypes.BOOLEAN,
        manutencaoEstiloVidaAtivo: DataTypes.BOOLEAN,
        comportamentalId: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'ExercicioFisico',
        tableName: 'ExercicioFisico',
        timestamps: false, // Desativando timestamps automáticos
    }
);


ExercicioFisico.belongsTo(Comportamentais, { foreignKey: 'comportamentalId', as: 'comportamental' });
Comportamentais.hasMany(ExercicioFisico, { foreignKey: 'exercicioId', as: 'exercicio' });

export default ExercicioFisico;
