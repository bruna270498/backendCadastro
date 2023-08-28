import BehavioralFactors from "../../interface/registration/behavioral";
import Comportamentais from "../../database/moldes/comportamentais/comportamental";
import AbusoSubstancias from "../../database/moldes/comportamentais/abusoSubstancias";
import Adesao from "../../database/moldes/comportamentais/adesao";
import Autocuidado from "../../database/moldes/comportamentais/autocuidado";
import DiagnosticoComportamental from "../../database/moldes/comportamentais/diagnostico";
import ExercicioFisico from "../../database/moldes/comportamentais/exercicioFisico";
import IntervencaoComportamental from "../../database/moldes/comportamentais/intervencao";
import SaudeSexual from "../../database/moldes/comportamentais/saudeSexual";

export default class FactorBehavioral {
    model = Comportamentais;
    model2 = Adesao;
    model3 = AbusoSubstancias;
    model4 = Autocuidado;
    model5 = DiagnosticoComportamental;
    model6 = ExercicioFisico;
    model7 = IntervencaoComportamental;
    model8 = SaudeSexual;

    constructor() {
        this.model = Comportamentais;
        this.model2 = Adesao;
        this.model3 = AbusoSubstancias;
        this.model4 = Autocuidado;
        this.model5 = DiagnosticoComportamental;
        this.model6 = ExercicioFisico;
        this.model7 = IntervencaoComportamental;
        this.model8 = SaudeSexual;
    }
    async newBehavioral(behavioral: { comportamental: any; abusa: any; adesao: any; autocuidado: any; diagnostico: any; exercicio: any; intervensao: any; saude: any; }) {
        const { comportamental, abusa, adesao, autocuidado, diagnostico,
            exercicio, intervensao, saude } = behavioral;

        const createBehavioral = await this.model.create(comportamental);
        const { id } = createBehavioral.toJSON();
        const abusoSubstanciasId = await this.model3.create({ ...abusa, comportamentalId: id });
        const adesaoId = await this.model2.create({ ...adesao, comportamentalId: id });
        const autocuidadoId = await this.model4.create({ ...autocuidado, comportamentalId: id });
        const diagnosticoId = await this.model5.create({ ...diagnostico, comportamentalId: id });
        const exercicioId = await this.model6.create({ ...exercicio, comportamentalId: id });
        const intervencoesId = (await this.model7.create({ ...intervensao, comportamentalId: id })).toJSON();
        const saudeSexualId = await this.model8.create({ ...saude, comportamentalId: id });

        await createBehavioral.update({
            abusoSubstanciasId: abusoSubstanciasId.id,
            adesaoId: adesaoId.id,
            autocuidadoId: autocuidadoId.id,
            diagnosticoId: diagnosticoId.id,
            exercicioId: exercicioId.id,
            intervencoesId: intervencoesId.id,
            saudeSexualId: saudeSexualId.id
        })
        return {
            ...createBehavioral.toJSON(), abusoSubstanciasId, adesaoId, autocuidadoId, diagnosticoId, exercicioId, intervencoesId, saudeSexualId
        };
    }

    async findAllBehavioral() {
        return await this.model.findAll();
    }

    async updateBehavioral(id: number, body) {
        const { comportamental, abusa, adesao, autocuidado, diagnostico,
            exercicio, intervensao, saude } = body;
        const idBehavioral = await this.model.findByPk(id);
        if (!idBehavioral) {
            return "id não encontrado"
        }
        const Behavioral = await this.model.update(comportamental, {
            where: { id }
        });
        const abusoSubstanciasId = await this.model3.update(abusa, {
            where: { id }
        });
        const adesaoId = await this.model2.update(adesao, {
            where: { id }
        });
        const autocuidadoId = await this.model4.update(autocuidado, {
            where: { id }
        });
        const diagnosticoId = await this.model5.update(diagnostico, {
            where: { id }
        });
        const exercicioId = await this.model6.update(exercicio, {
            where: { id }
        });
        const intervencoesId = (await this.model7.update(intervensao, {
            where: { id }
        }));
        const saudeSexualId = await this.model8.update(saude, {
            where: { id }
        });

        return "Dados atualizados com sucesso";

    }

    async findPk(id: number) {
        // const comportamental = await this.model.findByPk(id);
        // const adesaoId = await this.model2.findOne({ where: { id: 1 } });
        // const abusoSubstanciasId = await this.model3.findByPk(id);
        // const autocuidadoId = await this.model4.findByPk(id);
        // const diagnosticoId = await this.model5.findByPk(id);
        // const exercicioId = await this.model6.findByPk(id);
        // const intervencoesId = await this.model7.findByPk(id);
        // const saudeSexualId = await this.model8.findByPk(id);
        return {
            adesao: adesaoId
            // ...comportamental?.toJSON(), adesao: adesaoId//, abusoSubstanciasId, autocuidadoId,
            //diagnosticoId, exercicioId, intervencoesId, saudeSexualId
        };
    }
}