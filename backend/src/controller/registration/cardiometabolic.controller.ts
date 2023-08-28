import { Request, Response } from 'express';
import ServiceCardiometabolic from '../../service/registration/cardiometabolic.service';

export default class ControllerCardiometabolic {
    serviceCardiometabolic: ServiceCardiometabolic;

    constructor(serviceCardiometabolic = new ServiceCardiometabolic()) {
        this.serviceCardiometabolic = serviceCardiometabolic;
        this.newCardiometabolic = this.newCardiometabolic.bind(this);
        this.AllCardiometabolico = this.AllCardiometabolico.bind(this);
    }

    newCardiometabolic = async (req: Request, res: Response) => {
        const cardiometabolic = await this.serviceCardiometabolic.cardiometabolicNew(req.body);
        return res.status(201).json(cardiometabolic);
    }

    AllCardiometabolico = async (_req: Request, res: Response) => {
        const AllFind = await this.serviceCardiometabolic.cardiometabolicoAll();
        return res.status(200).json(AllFind);
    }
}