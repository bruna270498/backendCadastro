import { Request, Response } from 'express';
import ServiceRegistrationGuys from '../../service/registration/registration.service';

export default class ControllerRegistrationGuys {
    serviceRegister: ServiceRegistrationGuys;

    constructor(serviceRegister = new ServiceRegistrationGuys()) {
        this.serviceRegister = serviceRegister;
        this.AllRegistration = this.AllRegistration.bind(this);
        this.FindRegister = this.FindRegister.bind(this);
        this.newRegister = this.newRegister.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
    }

    newRegister = async (req: Request, res: Response) => {
        const register = await this.serviceRegister.newRegister(req.body);
        return res.status(201).json(register);
    }

    AllRegistration = async (_req: Request, res: Response) => {
        const pacientes = await this.serviceRegister.RegistrationAll();
        return res.status(200).json(pacientes);
    }

    FindRegister = async (req: Request, res: Response) => {
        const { id } = req.params;
        const paciente = await this.serviceRegister.RegisterFind(+id);
        return res.status(200).json(paciente);
    }

    async updateRegister(req: Request, res: Response) {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedRegistration = await this.serviceRegister.updateRegistration(+id, updatedData);
        return res.status(200).json(updatedRegistration);
    }
};
