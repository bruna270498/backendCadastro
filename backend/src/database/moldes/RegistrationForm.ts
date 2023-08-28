import { DataTypes, Model, Optional } from 'sequelize';
import db from '.'; // Importe a instância do Sequelize já configurada
import RegistrationFormAttributes from '../../interface/registration/RegistrationFormAttributes';

interface RegistrationFormCreationAttributes
    extends Optional<RegistrationFormAttributes, 'id'> { }

class RegistrationForm
    extends Model<RegistrationFormAttributes, RegistrationFormCreationAttributes>
    implements RegistrationFormAttributes {
    public id!: number;
    public name!: string;
    public medicalRecord!: string;
    public gender!: string;
    public address!: string;
    public age!: string;
    public dateBirth!: string;
    public maritalStatus!: string;
    public education!: string;
    public occupation!: string;
    public ethnicity!: string;
    public religion!: string | null;
    public numberOfChildren!: number;
    public otherInformation!: string | null;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
        // Defina associações, se houver
    }
}

RegistrationForm.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        medicalRecord: {
            type: DataTypes.STRING,
        },
        gender: DataTypes.STRING,
        address: DataTypes.STRING,
        age: DataTypes.STRING,
        dateBirth: {
            type: DataTypes.STRING,
        },
        maritalStatus: {
            type: DataTypes.STRING,
        },
        education: DataTypes.STRING,
        occupation: DataTypes.STRING,
        ethnicity: DataTypes.STRING,
        religion: DataTypes.STRING,
        numberOfChildren: {
            type: DataTypes.INTEGER,
        },
        otherInformation: {
            type: DataTypes.STRING,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize: db,
        modelName: 'RegistrationForm',
        tableName: 'RegistrationForm', // Nome da tabela que você criou na migração
    }
);

export default RegistrationForm;
