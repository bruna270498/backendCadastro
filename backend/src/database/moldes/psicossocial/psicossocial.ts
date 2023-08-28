import { DataTypes, Model, Optional } from 'sequelize';
import db from '..';

class Psicossocial extends Model {
    static associate(models: any) {
        this.hasMany(models.Comunicacao, { foreignKey: 'IdPsicossocial', as: 'comunicacao' });
        this.hasMany(models.AceitacaoAdaptacao, { foreignKey: 'IdPsicossocial', as: 'aceitacaoAdaptacao' });
        this.hasMany(models.Socioeconomico, { foreignKey: 'IdPsicossocial', as: 'socioeconomico' });
        this.hasMany(models.IntegracaoSocial, { foreignKey: 'IdPsicossocial', as: 'interacaoSocial' });
        this.hasMany(models.SaudeEmocional, { foreignKey: 'IdPsicossocial', as: 'saudeEmocional' });
        this.hasMany(models.Autoimagem, { foreignKey: 'IdPsicossocial', as: 'autoImagem' });
        this.hasMany(models.Autoestima, { foreignKey: 'IdPsicossocial', as: 'autoEstima' });
        this.hasMany(models.CrencaEspiritual, { foreignKey: 'IdPsicossocial', as: 'crencaEspiritual' });
        this.hasMany(models.CrencaReligiosa, { foreignKey: 'IdPsicossocial', as: 'crencaReligiosa' });
        this.hasMany(models.DiagnosticoPsicossocial, { foreignKey: 'IdPsicossocial', as: 'diagnostico' });
        this.hasMany(models.IntervencaoPsicossocial, { foreignKey: 'IdPsicossocial', as: 'intervencao' })
    }
}

Psicossocial.init(
    {
        buscaServicoSaude: DataTypes.STRING,
        procurouServicoCardiovascular: DataTypes.BOOLEAN,
        capazMonitorarSaudeCardiovascular: DataTypes.BOOLEAN,
        capazManejarRegime: DataTypes.STRING,
        conheceEstrategiasReduzirRisco: DataTypes.BOOLEAN,
        conheceRegimePrescrito: DataTypes.STRING,
        quaisRegimes: DataTypes.STRING,
        barreirasConhecimentoRegime: DataTypes.STRING,
        outrasBarreiras: DataTypes.STRING,
        EspecificarBarreiras: DataTypes.STRING,
        reproduzInformacoesRegime: DataTypes.BOOLEAN,
        educacaoSaudeComprometeSaude: DataTypes.BOOLEAN,
        disposicaoAprenderRegime: DataTypes.BOOLEAN,
        aceitacaoAdaptacaoId: DataTypes.INTEGER,
        autoEstimaId: DataTypes.INTEGER,
        autoImagemId: DataTypes.INTEGER,
        comunicacaoId: DataTypes.INTEGER,
        crencaEspiritualId: DataTypes.INTEGER,
        crencaReligiosaId: DataTypes.INTEGER,
        diagnosticoId: DataTypes.INTEGER,
        interacaoSocialId: DataTypes.INTEGER,
        saudeEmocionalId: DataTypes.INTEGER,
        socioeconomicoId: DataTypes.INTEGER,
        intervencaoId: DataTypes.INTEGER,
    },
    {
        sequelize: db,
        modelName: 'Psicossocial',
        tableName: 'Psicossocial',
        timestamps: false, // Desativando timestamps automáticos
    }
);

export default Psicossocial;
