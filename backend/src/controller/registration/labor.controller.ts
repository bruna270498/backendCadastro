import { Request, Response } from "express";
import ServiceLabor from "../../service/registration/labor.service";

export default class ControllerLabor {
    serviceLabor: ServiceLabor;
    constructor(serviceLabor = new ServiceLabor()) {
        this.serviceLabor = serviceLabor;
        this.NewLabor = this.NewLabor.bind(this);
        this.laborUpdate = this.laborUpdate.bind(this);
        this.laborAll = this.laborAll.bind(this);
    }

    async NewLabor(req: Request, res: Response) {
        const labor = await this.serviceLabor.LaborNew(req.body);
        return res.status(201).json(labor);
    }

    async laborUpdate(req: Request, res: Response) {
        const { id } = req.params;
        const update = await this.serviceLabor.update(+id, req.body);
        return res.status(201).json(update);
    }

    async laborAll(_req: Request, res: Response) {
        const labors = await this.serviceLabor.allLabor();
        return res.status(200).json(labors);
    }
};