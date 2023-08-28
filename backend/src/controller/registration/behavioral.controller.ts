import { Request, Response } from "express";
import FactorBehavioral from "../../service/registration/behavioral.service";

export default class BehavioralController {
    factorBehavioral: FactorBehavioral;
    constructor(factorBehavioral = new FactorBehavioral()) {
        this.factorBehavioral = factorBehavioral;
        this.BehavioralNew = this.BehavioralNew.bind(this);
    }
    BehavioralNew = async (req: Request, res: Response) => {
        const behavioral = await this.factorBehavioral.newBehavioral(req.body);
        return res.status(201).json(behavioral);
    }
};