import psychosocialCultural from "../../interface/registration/psychosocial";
import PsychosocialCultural from "../../database/moldes/psicossocial/psicossocial";
import Comunicacao from "../../database/moldes/psicossocial/comunicacao";
import AceitacaoAdaptacao from "../../database/moldes/psicossocial/adaptacaoAceitacao";
import Socioeconomico from "../../database/moldes/psicossocial/socioeconomico";
import IntegracaoSocial from "../../database/moldes/psicossocial/interacaoSocial";
import SaudeEmocional from "../../database/moldes/psicossocial/saudeEmocional";
import Autoimagem from "../../database/moldes/psicossocial/autoImagem";
import Autoestima from "../../database/moldes/psicossocial/autoEstima";
import CrencaEspiritual from "../../database/moldes/psicossocial/crencaEspiritual";
import CrencaReligiosa from "../../database/moldes/psicossocial/crencaReligiosa";
import DiagnosticoPsicossocial from "../../database/moldes/psicossocial/diagnostico";
import IntervencaoPsicossocial from "../../database/moldes/psicossocial/intervencao";

export default class FactorPsychosocial {
    model = PsychosocialCultural;
    model2 = Comunicacao;
    model3 = AceitacaoAdaptacao;
    model4 = Socioeconomico;
    model5 = IntegracaoSocial;
    model6 = SaudeEmocional;
    model7 = Autoimagem;
    model8 = Autoestima;
    model9 = CrencaEspiritual;
    model10 = CrencaReligiosa;
    model11 = DiagnosticoPsicossocial;
    model12 = IntervencaoPsicossocial;

    constructor() {
        this.model = PsychosocialCultural;
        this.model2 = Comunicacao;
        this.model3 = AceitacaoAdaptacao;
        this.model4 = Socioeconomico;
        this.model5 = IntegracaoSocial;
        this.model6 = SaudeEmocional;
        this.model7 = Autoimagem;
        this.model8 = Autoestima;
        this.model9 = CrencaEspiritual
        this.model10 = CrencaReligiosa;
        this.model11 = DiagnosticoPsicossocial;
        this.model12 = IntervencaoPsicossocial;
    }
    async newPsychosocial(psychosocial: { conhecimento: any; comunicacao: any; aceitacaoAdaptacao: any; socioeconomico: any; integracaoSocial: any; saudeEmocional: any; autoimagem: any; autoestima: any; crencaEspiritual: any; crencaReligiosa: any; diagnostico: any; intervencao: any; }) {
        const { conhecimento, comunicacao, aceitacaoAdaptacao, socioeconomico,
            integracaoSocial, saudeEmocional, autoimagem, autoestima, crencaEspiritual,
            crencaReligiosa, diagnostico, intervencao
        } = psychosocial;

        const createPsychosocial = await this.model.create(conhecimento);
        const { id } = createPsychosocial.toJSON();
        const religiosaoOk = await this.model10.create({ IdPsicossocial: id, ...crencaReligiosa });
        const diagnosticoOk = await this.model11.create({ IdPsicossocial: id, ...diagnostico });
        const intervencaoOk = await this.model12.create({ IdPsicossocial: id, ...intervencao });
        const comunicacaoOk = await this.model2.create({ IdPsicossocial: id, ...comunicacao });
        const aceitacao = await this.model3.create({ IdPsicossocial: id, ...aceitacaoAdaptacao });
        const socioeconomicoOk = await this.model4.create({ IdPsicossocial: id, ...socioeconomico });
        const integracao = await this.model5.create({ IdPsicossocial: id, ...integracaoSocial });
        const saudeEmocionalOk = await this.model6.create({ IdPsicossocial: id, ...saudeEmocional });
        const autoestimaOk = await this.model8.create({ IdPsicossocial: id, ...autoestima });
        const autoimagemOk = await this.model7.create({ IdPsicossocial: id, ...autoimagem });
        const crencaEspiritualOk = await this.model9.create({ IdPsicossocial: id, ...crencaEspiritual });

        await createPsychosocial.update({
            aceitacaoAdaptacaoId: aceitacao.id,
            autoEstimaId: autoestimaOk.id,
            autoImagemId: autoestimaOk.id,
            comunicacaoId: comunicacaoOk.id,
            crencaEspiritualId: crencaEspiritualOk.id,
            crencaReligiosaId: religiosaoOk.id,
            diagnosticoId: diagnosticoOk.id,
            interacaoSocialId: integracao.id,
            saudeEmocionalId: saudeEmocionalOk.id,
            socioeconomicoId: socioeconomicoOk.id,
            intervencaoId: intervencaoOk.id
        });

        const cadatro = { ...createPsychosocial.toJSON() };
        delete cadatro.aceitacaoAdaptacaoId;
        delete cadatro.autoEstimaId;
        delete cadatro.autoImagemId;
        delete cadatro.comunicacaoId;
        delete cadatro.crencaEspiritualId;
        delete cadatro.crencaReligiosaId;
        delete cadatro.diagnosticoId;
        delete cadatro.interacaoSocialId;
        delete cadatro.saudeEmocionalId;
        delete cadatro.socioeconomicoId;
        delete cadatro.intervencaoId;

        return {
            conhecimento: { ...cadatro },
            comunicacao: comunicacaoOk,
            aceitacaoAdaptacao: aceitacao,
            socioeconomico: socioeconomicoOk,
            integracaoSocial: integracao,
            saudeEmocional: saudeEmocionalOk,
            autoestima: autoestimaOk,
            autoimagem: autoimagemOk,
            crencaEspiritual: crencaEspiritualOk,
            crencaReligiosa: religiosaoOk,
            diagnostico: diagnosticoOk,
            intervencao: intervencaoOk,
        }
    }
    async findBy(id: number) {
        const psicossocial = await this.model.findByPk(id);
        return psicossocial;
    }

    async updatePsicossocial(id: number, body: { conhecimento: any; comunicacao: any; aceitacaoAdaptacao: any; socioeconomico: any; integracaoSocial: any; saudeEmocional: any; autoimagem: any; autoestima: any; crencaEspiritual: any; crencaReligiosa: any; diagnostico: any; intervencao: any; }) {
        const { conhecimento, comunicacao, aceitacaoAdaptacao, socioeconomico,
            integracaoSocial, saudeEmocional, autoimagem, autoestima, crencaEspiritual,
            crencaReligiosa, diagnostico, intervencao
        } = body;

        const psicossocialI = await this.model.findByPk(id);
        if (!psicossocialI) {
            return "id não encontrado";
        };
        psicossocialI.update(conhecimento, { where: { id } });
        await this.model2.update(comunicacao, { where: { id } });
        await this.model3.update(aceitacaoAdaptacao, { where: { id } });
        await this.model4.update(socioeconomico, { where: { id } });
        await this.model5.update(integracaoSocial, { where: { id } });
        await this.model6.update(saudeEmocional, { where: { id } });
        await this.model7.update(autoimagem, { where: { id } });
        await this.model8.update(autoestima, { where: { id } });
        await this.model10.update(crencaReligiosa, { where: { id } });
        await this.model9.update(crencaEspiritual, { where: { id } });
        await this.model11.update(diagnostico, { where: { id } });
        await this.model12.update(intervencao, { where: { id } });

        return "Dados atualizados com sucesso";
    }
};


