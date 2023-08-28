import laborFactor from "../../interface/registration/laborFactors";
import LaborFactors from "../../database/moldes/laborFactors";

export default class ServiceLabor {
    model = LaborFactors;

    constructor() {
        this.model = LaborFactors;
    }

    async LaborNew(labor: laborFactor): Promise<laborFactor> {
        const { fatoresInterferemSono, ...rest } = labor;
        const newObj = {
            ...rest,
            fatoresInterferemSono: JSON.stringify(fatoresInterferemSono)
        }
        const creteLabor = await this.model.create(newObj);
        return creteLabor;
    }

    async update(id: number, labor) {
        const { fatoresInterferemSono, ...rest } = labor;
        const newObj = {
            ...rest,
            fatoresInterferemSono: JSON.stringify(fatoresInterferemSono)
        }

        const laborRows = await this.model.update(newObj, {
            where: { id }
        });

        if (laborRows[0] > 0) {
            const updatedLaborRows = await this.model.findByPk(id);
            return updatedLaborRows;
        }

        return "id não encontrado"; // Indica que o objeto não foi encontrado ou não foi atualizado
    }

    async allLabor() {
        const labors = await this.model.findAll();
        return labors;
    }
};