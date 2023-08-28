import { DataTypes, Model, ModelStatic, Optional } from 'sequelize';
import db from '.'; // Importe a instância do Sequelize já configurada
import AffectiousTherapeutic from '../../interface/registration/AffectiousTherapeutic';


export default class Afeccious extends Model { }

Afeccious.init({
    apresentaLesoes: DataTypes.STRING,
    condicaoIntegridadeFisicaComprometeSaudeCardiovascular: DataTypes.BOOLEAN,
    disposicaoMonitorarSinaisSintomasLesaoCardiovascular: DataTypes.BOOLEAN,
    DiagnosticosEnfermagem: DataTypes.STRING,
    ResultadosEnfermagem: DataTypes.STRING,
}, {
    sequelize: db,
    timestamps: false,
    modelName: 'Afeccious',
    tableName: 'Afeccious', // Nome da tabela que você criou na migração
});
