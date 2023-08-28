import { Request, Response } from "express";
import ServiceAffectious from "../../service/registration/affectious.service";

export default class ControllerAffectious {
    serviceAffectious: ServiceAffectious;
    constructor(serviceAffectious = new ServiceAffectious()) {
        this.serviceAffectious = serviceAffectious;
        this.NewAffectious = this.NewAffectious.bind(this);
        this.AllAffectious = this.AllAffectious.bind(this);
        this.affectiousUpdate = this.affectiousUpdate.bind(this);
    }

    async NewAffectious(req: Request, res: Response) {
        const affectious = await this.serviceAffectious.AffectiousNew(req.body);
        return res.status(201).json(affectious);
    }

    async AllAffectious(_req: Request, res: Response) {
        const allAff = await this.serviceAffectious.affectiousAll();
        return res.status(200).json(allAff);
    }

    async affectiousUpdate(req: Request, res: Response) {
        const { id } = req.params;
        const upadte = await this.serviceAffectious.update(+id, req.body);
        return res.status(201).json(upadte);
    }
};