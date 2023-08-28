import { Request, Response } from "express";
import FactorBehavioral from "../../service/registration/behavioral.service";

export default class BehavioralController {
    factorBehavioral: FactorBehavioral;
    constructor(factorBehavioral = new FactorBehavioral()) {
        this.factorBehavioral = factorBehavioral;
        this.BehavioralNew = this.BehavioralNew.bind(this);
        this.behavioralAll = this.behavioralAll.bind(this);
        this.updateBehavioral = this.updateBehavioral.bind(this);
        this.findById = this.findById.bind(this);
    }
    BehavioralNew = async (req: Request, res: Response) => {
        const behavioral = await this.factorBehavioral.newBehavioral(req.body);
        return res.status(201).json(behavioral);
    }

    async behavioralAll(req: Request, res: Response) {
        const all = await this.factorBehavioral.findAllBehavioral();
        return res.status(200).json(all);
    }

    async updateBehavioral(req: Request, res: Response) {
        const { id } = req.params;
        const behavioralOk = await this.factorBehavioral.updateBehavioral(+id, req.body);

        return res.status(200).json(behavioralOk);
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;
        const comportamental = await this.factorBehavioral.findPk(+id);
        return res.status(200).json(comportamental);
    }
};