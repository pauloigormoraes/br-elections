const mongoose = require('mongoose')
const Schema = mongoose.Schema
const votacoes = new Schema({
    count: { type: Number },
    next: { type: String },
    previous: { type: String },
    results: [{
        ano_eleicao: { type: Number },
        sigla_uf: { type: String },
        nome_municipio: { type: String },
        descricao_cargo: { type: String },
        num_turno: { type: Number },
        numero_zona: { type: Number },
        sigla_partido: { type: String },
        nome_candidato: { type: String },
        nome_urna_candidato: { type: String },
        numero_cand: { type: Number },
        desc_sit_cand_superior: { type: String },
        desc_sit_candidato: { type: String },
        desc_sit_cand_tot: { type: String },
        transito: { type: String },
        cod_sit_cand_superior: { type: Number },
        codigo_cargo: { type: Number },
        codigo_municipio: { type: Number },
        codigo_sit_cand_tot: { type: Number },
        codigo_sit_candidato: { type: String },
        composicao_legenda: { type: String },
        datahora_geracao: { type: Date },
        descricao_eleicao: { type: String },
        nome_coligacao: { type: String },
        nome_partido: { type: String },
        numero_partido: { type: Number },
        sequencial_legenda: { type: String },
        sigla_ue: { type: String },
        sq_candidato: { type: String },
        total_votos: { type: Number },
    }]
})
votacoes.set('toJSON', { virtuals: true })
module.exports = mongoose.model('votacoes', votacoes)
