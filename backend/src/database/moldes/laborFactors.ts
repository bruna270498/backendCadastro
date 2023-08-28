import { DataTypes, Model, Optional } from 'sequelize';
import db from '.'; // Importe a instância do Sequelize já configurada
import laborFactor from '../../interface/registration/laborFactors';

interface laborFactorreationAttributes
    extends Optional<laborFactor, 'id'> { }

export default class LaborFactors extends Model<laborFactor, laborFactorreationAttributes>
    implements laborFactor {
    sono!: string;
    motivoSonoPrejudicado!: string;
    usoMedicamentoDormir!: boolean;
    especificarUsoMedicamento!: string;
    horasSonoPorDia!: string;
    id!: number;
    fatoresInterferemSono!: string;
    sonoComprometeSaudeCardiovascular!: boolean;
    disposicaoMelhorarHabitosSono!: boolean;
    DiagnosticosEnfermagem!: string;
    ResultadosEnfermagem!: string;
};
LaborFactors.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        sono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        motivoSonoPrejudicado: {
            type: DataTypes.STRING,
            allowNull: true
        },
        usoMedicamentoDormir: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        especificarUsoMedicamento: {
            type: DataTypes.STRING,
            allowNull: true
        },
        horasSonoPorDia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fatoresInterferemSono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sonoComprometeSaudeCardiovascular: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        disposicaoMelhorarHabitosSono: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        DiagnosticosEnfermagem: {
            type: DataTypes.STRING, // Armazenar um objeto JSON com as colunas Adesao, Autocuidado, AbusoSubstancias e ProcessoSexualSexualidade
            allowNull: true,
        },
        ResultadosEnfermagem: {
            type: DataTypes.STRING, // Armazenar um objeto JSON com as mesmas colunas da diagnosticosEnfermagem
            allowNull: true,
        }
    }, {
    sequelize: db,
    timestamps: false,
    modelName: 'LaborFactors',
    tableName: 'LaborFactors', // Nome da tabela que você criou na migração
}
)