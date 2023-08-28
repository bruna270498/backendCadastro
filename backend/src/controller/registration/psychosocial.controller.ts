import { Request, Response } from "express";
import FactorPsychosocial from "../../service/registration/psychosocial";

export default class ControllerPsychosocial {
    factorPsychosocial: FactorPsychosocial;
    constructor(factorPsychosocial = new FactorPsychosocial()) {
        this.factorPsychosocial = factorPsychosocial;
        this.PsychosocialNew = this.PsychosocialNew.bind(this);
        this.findByPsychosocial = this.findByPsychosocial.bind(this);
        this.updateOk = this.updateOk.bind(this);
    }

    async PsychosocialNew(req: Request, res: Response) {
        const psychosocial = await this.factorPsychosocial.newPsychosocial(req.body);
        return res.status(201).json(psychosocial);
    }

    async findByPsychosocial(req: Request, res: Response) {
        const { id } = req.params;
        const findBy = await this.factorPsychosocial.findBy(+id);
        return res.status(200).json(findBy);
    }

    async updateOk(req: Request, res: Response) {
        const { id } = req.params;
        const psicossocial = await this.factorPsychosocial.updatePsicossocial(+id, req.body);
        return res.status(200).json(psicossocial);
    }
};