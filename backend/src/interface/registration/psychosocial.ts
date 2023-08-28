export default interface psychosocialCultural {
    buscaServicoSaude: string;
    procurouServicoCardiovascular: boolean;
    capazMonitorarSaudeCardiovascular: boolean;
    capazManejarRegime: string;
    conheceEstrategiasReduzirRisco: boolean;
    conheceRegimePrescrito: string;
    quaisRegimes: string[];
    barreirasConhecimentoRegime: string[];
    outrasBarreiras: string;
    EspecificarBarreiras: string;
    reproduzInformacoesRegime: boolean;
    educacaoSaudeComprometeSaude: boolean;
    disposicaoAprenderRegime: boolean;
    linguagemLibras: boolean;
    id: number;
    comunicacaoVerbal: string;
    comunicacaoNaoVerbal: string;
    comunicacaoFamiliar: string;
    comunicacaoProfissional: string;
    comunicacaoProfissionalEspecificar: string;
    barreirasComunicacao: string[];
    condicaoComprometeSaude: boolean;
    disposicaoMelhorarComunicacao: boolean;
    reconheceRiscoCardiovascular: string;
    associaHabitosRiscoCardiovascular: string;
    atitudeCuidadoCardiovascular: string;
    adaptacaoCondicaoRiscoCardiovascular: string;
    condicaoComprometeSaudeCardiovascular: boolean;
    disposicaoMelhorarAdaptacao: boolean;
    rendaFamiliar: string;
    habitacao: string;
    acessoEducacao: boolean;
    dificuldadeFinanceira: boolean;
    especificarDificuldadeFinanceira: string;
    dificuldadeAlimentacao: boolean;
    dificuldadeExercicioFisico: boolean;
    dificuldadeMedicamentos: boolean;
    condicaoComprometeCuidadoCardiovascular: boolean;
    disposicaoMelhorarCondicao: boolean;
    interacaoSocial: string;
    interacaoFamiliar: string;
    especificarInteracaoFamiliar: string;
    dificuldadeVinculo: string;
    especificarDificuldadeVinculo: string;
    amigosConvivioDiario: boolean;
    isolamentoSocial: boolean;
    sentimento: string[];
    especificarSentimento: string;
    condicaoSocioFamiliarComprometeCuidadoCardiovascular: boolean;
    disposicaoMelhorarInteracao: boolean;
    apoioFamiliar: string;
    problemasRelacaoFamiliar: boolean;
    especificarProblemasRelacaoFamiliar: string;
    historicoProblemasEmocionais: boolean;
    especificarHistoricoProblemasEmocionais: string;
    pessoaAnsiosa: boolean;
    estresse: boolean;
    humorAnsioso: string[];
    tensao: string[];
    insonia: string[];
    humorDepressivo: string;
    sintomasGerais: string;
    estadoEmocionalConsulta: string;
    ansiedade1: boolean;
    grauAnsiedade: string;
    ansiedadeComprometeCuidadoCardiovascular: boolean;
    faltaApoioFamiliarComprometeCuidadoCardiovascular: boolean;
    disposicaoMelhorarSegurancaEmocional: boolean;
    autoestimaOpiniao: string;
    aceitaElogiosSugestoes: boolean;
    autoestimaReferida: string;
    negligenciaSaude: boolean;
    especifiqueNegligencia: string;
    baixaAutoestimaComprometeCuidado: boolean;
    disposicaoMelhorarAutoestima: boolean;
    autoimagemOpiniao: string;
    relatoAutoimagem: string;
    sobrepesoComprometeAutoimagem: boolean;
    autoimagemNegativaComprometeCuidado: boolean;
    disposicaoMelhorarAutoimagem: boolean;
    angustiaSinaisSintomas: boolean;
    especificarAngustia: string;
    angustiaSinaisSintomasEspirituais: boolean;
    especificarAngustiaEspiritual: string;
    bemEstarEspiritual: string;
    crencaEspirirualEspecifica: boolean;
    especificarCrencaEspirirual: string;
    crencaEspiritualComprometeCuidado: boolean;
    disposicaoMelhorarCrencaEspiritual: boolean;
    conflitoReligioso: boolean;
    especificarConflitoReligioso: string;
    enfrentamentoReligioso: string;
    crencaReligiosaEspecifica: boolean;
    especificarCrencaReligiosa: string;
    crencaReligiosaComprometeCuidado: boolean;
    disposicaoMelhorarCrencaReligiosa: boolean;
    createdAt: Date;
    updatedAt: Date;
    DiagnosticosEnfermagem: {
        Conhecimento: string[];
        Comunicacao: string;
        AceitacaoAdaptacao: string[];
        CondicaoSocioeconomica: string;
        RelacoesInterpessoais: string[];
        EstresseAnsiedade: string[];
        Autoestima: string[];
        Autoimagem: string;
        CrencaEspiritual: string[];
        CrencaReligiosa: string[];
    };
    ResultadosEnfermagem: {
        Conhecimento: string;
        Comunicacao: string;
        AceitacaoAdaptacao: string;
        CondicaoSocioeconomica: string;
        RelacoesInterpessoais: string;
        EstresseAnsiedade: string;
        Autoestima: string;
        Autoimagem: string;
        CrencaEspiritual: string;
        CrencaReligiosa: string;
    }
};