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
    async newBehavioral(behavioral) {
        const { comportamental, abusa, adesao, autocuidado, diagnostico,
            exercicio, intervensao, saude } = behavioral;

        const createBehavioral = await this.model3.create(comportamental);
        const { id } = createBehavioral.toJSON();
        const abusoSubstanciasId = await this.model.create({ ...abusa, comportamentalId: id });
        const adesaoId = await this.model2.create({ ...adesao, comportamentalId: id });
        const autocuidadoId = await this.model4.create({ ...autocuidado, comportamentalId: id });
        const diagnosticoId = await this.model5.create({ ...diagnostico, comportamentalId: id });
        const exercicioId = await this.model6.create({ ...exercicio, comportamentalId: id });
        const intervencoesId = (await this.model7.create({ ...intervensao, comportamentalId: id })).toJSON();
        const saudeSexualId = await this.model8.create({ ...saude, comportamentalId: id });

        await abusoSubstanciasId.update({
            abusoSubstanciasId: createBehavioral.id,
            adesaoId: adesaoId.id,
            autocuidadoId: autocuidadoId.id,
            diagnosticoId: diagnosticoId.id,
            exercicioId: exercicioId.id,
            intervencoesId: intervencoesId.id,
            saudeSexualId: saudeSexualId.id
        })
        return {
            ...abusoSubstanciasId.toJSON(), abusoSubstanciasId: createBehavioral.toJSON(), adesaoId, autocuidadoId, diagnosticoId, exercicioId, intervencoesId, saudeSexualId
        };
    }
}