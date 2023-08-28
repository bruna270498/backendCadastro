interface RegistrationFormAttributes {
    id: number;
    name: string;
    medicalRecord: string;
    gender: string;
    address: string;
    age: string;
    dateBirth: string;
    maritalStatus: string;
    education: string;
    occupation: string;
    ethnicity: string;
    religion: string | null;
    numberOfChildren: number;
    otherInformation: string | null;
    createdAt: Date;
    updatedAt: Date;
};

export default RegistrationFormAttributes;
