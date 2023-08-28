import AffectiousTherapeutic from "../../interface/registration/AffectiousTherapeutic";
import AffectiousTherapeutics from "../../database/moldes/affectiousTherapeutic";

export default class ServiceAffectious {
    model = AffectiousTherapeutics;
    constructor() {
        this.model = AffectiousTherapeutics;
    }
    async AffectiousNew(affectious: { [x: string]: any; apresentaLesoes: any; }) {
        const { apresentaLesoes, ...rest } = affectious;
        const newObj = {
            ...rest,
            apresentaLesoes: JSON.stringify(apresentaLesoes)
        }
        const createAffectious = await this.model.create(newObj);
        return createAffectious;
    }

    async affectiousAll() {
        const affectiousAll = await this.model.findAll();
        return affectiousAll;
    }


    async update(id: number, affectious: { [x: string]: any; apresentaLesoes: any; }) {
        const { apresentaLesoes, ...rest } = affectious;
        const newObj = {
            ...rest,
            apresentaLesoes: JSON.stringify(apresentaLesoes)
        }

        const [affectedRows] = await this.model.update(newObj, {
            where: { id }
        });

        if (affectedRows > 0) {
            const updatedAffectius = await this.model.findByPk(id);
            return updatedAffectius;
        }

        return "id não encontrado"; // Indica que o objeto não foi encontrado ou não foi atualizado
    }
};