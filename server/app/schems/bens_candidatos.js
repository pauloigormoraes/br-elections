const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bens_candidatos = new Schema({
    descricao_eleicao: { type: String },
    sigla_uf: { type: String },
    sq_candidato: { type: String },
    ds_tipo_bem_candidato: { type: String },
    detalhe_bem: { type: String },
    valor_bem: { type: Number },
    ano_eleicao: { type: Number },
    cd_tipo_bem_candidato: { type: Number }
})
bens_candidatos.set('toJSON', { virtuals: true })
module.exports = mongoose.model('bens_candidatos', bens_candidatos)
