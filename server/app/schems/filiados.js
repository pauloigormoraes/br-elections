const mongoose = require('mongoose')
const Schema = mongoose.Schema
    const filiados = new Schema({
        count: { type: Number },
        next: { type: String },
        previous: { type: String },
        results: [{
            codigo_do_municipio: { type: Number },
            data_da_desfiliacao: { type: Date },
            data_da_filiacao: { type: Date },
            data_da_regularizacao: { type: Date },
            data_do_cancelamento: { type: Date },
            data_do_processamento: { type: Date },
            datahora_da_extracao: { type: Date },
            motivo_do_cancelamento: { type: String },
            nome_do_filiado: { type: String },
            nome_do_municipio: { type: String },
            nome_do_partido: { type: String },
            numero_da_inscricao: { type: String },
            secao_eleitoral: { type: Number },
            sigla_do_partido: { type: String },
            situacao_do_registro: { type: String },
            tipo_do_registro: { type: String },
            uf: { type: String },
            zona_eleitoral: { type: Number }
        }]
    })
filiados.set('toJSON', { virtuals: true })
module.exports = mongoose.model('filiados', filiados)
