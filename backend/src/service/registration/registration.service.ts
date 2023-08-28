import RegistrationFormAttributes from "../../interface/registration/RegistrationFormAttributes";
import RegistrationForm from "../../database/moldes/RegistrationForm";

export default class ServiceRegistrationGuys {
    model = RegistrationForm;
    constructor() {
        this.model = RegistrationForm;
    }
    async newRegister(register: RegistrationFormAttributes): Promise<RegistrationFormAttributes> {
        const createdRegister = await this.model.create(register);
        return createdRegister.toJSON();
    }

    async RegistrationAll() {
        const allPacientes = await this.model.findAll();
        return allPacientes;
    }

    async RegisterFind(id: number) {
        const paciente = await this.model.findByPk(id);
        return paciente;
    }
    async updateRegistration(id: number, updatedData: RegistrationFormAttributes) {
        const refisterRows = await this.model.update(updatedData, {
            where: { id }
        });

        if (refisterRows[0] > 0) {
            const updatedLaborRows = await this.model.findByPk(id);
            return updatedLaborRows;
        }

        return "Usuário não encontrado"; // Indica que o objeto não foi encontrado ou não foi atualizado
    }
}
