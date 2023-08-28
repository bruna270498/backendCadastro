import DiagnosticoCardiometabolico from '../../database/moldes/cardiometabolic/diagnostico';
import FatoresCardiometabolico from '../../database/moldes/cardiometabolic/cardiometabolic';
import FactorsCardiometabolicAttributes from '../../interface/registration/cardiometabolic/cardiometabolic';
import intervencaoCardiometabolico from '../../database/moldes/cardiometabolic/interventionCardiometabolic';
import FuncaoMetabolica from '../../database/moldes/cardiometabolic/funcaoMetabolica';

export default class ServiceCardiometabolic {
    model2 = DiagnosticoCardiometabolico;
    model = FatoresCardiometabolico;
    model3 = intervencaoCardiometabolico;
    model4 = FuncaoMetabolica;

    constructor() {
        this.model2 = DiagnosticoCardiometabolico;
        this.model = FatoresCardiometabolico;
        this.model3 = intervencaoCardiometabolico;
        this.model4 = FuncaoMetabolica;
    }

    async cardiometabolicNew(cardiometabolic: any) {
        const { cardiovascular, funcaoMetabolica, diagnostico, intervencao } = cardiometabolic;
        const creteCadiometabolic = await this.model.create(cardiovascular);
        const { id } = creteCadiometabolic.toJSON();
        const met = { ...funcaoMetabolica, cardiometabolicoId: id };
        const dia = { ...diagnostico, cardiometabolicoId: id };
        const inter = { ...intervencao, cardiometabolicoId: id };
        const metabolica = await this.model4.create(met);
        const diagnosticoCar = await this.model2.create(dia);
        const intervencaoCar = await this.model3.create(inter);
        await creteCadiometabolic.update({
            funcaoMetabolicaId: metabolica.id,
            diagnosticoId: diagnosticoCar.id,
            intervencaoId: intervencaoCar.id
        });
        const a = { ...creteCadiometabolic.toJSON() };
        delete a.funcaoMetabolicaId
        delete a.diagnosticoId;
        delete a.intervencaoId;
        return {
            ...a,
            funcaoMetabolica: metabolica,
            diagnostico: diagnosticoCar,
            intervencao: intervencaoCar
        };
    }

    async cardiometabolicoAll() {
        const registrosEncontrados = await this.model.findAll();
        return registrosEncontrados;
    }
}