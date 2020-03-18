const MONGODB_USER = {
    "authSource": "admin",
    "user": "admin", 
    "pass":"admin",
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const MONGODB_CONNECT = {
    URL: "mongodb://localhost:27017/eleicoes",
    SECRET: "admim"
}

const URL_BENS_CANDIDATOS = "https://brasil.io/api/dataset/eleicoes-brasil/bens_candidatos/data?page="
const URL_CANDIDATOS = "https://brasil.io/api/dataset/eleicoes-brasil/candidatos/data?page="
const URL_FILIADOS = "https://brasil.io/api/dataset/eleicoes-brasil/filiados/data?page="
const URL_VOTACOES = "https://brasil.io/api/dataset/eleicoes-brasil/votacoes/data?page="

module.exports = { 
    MONGODB_USER,
    MONGODB_CONNECT,
    URL_BENS_CANDIDATOS,
    URL_CANDIDATOS,
    URL_FILIADOS,
    URL_VOTACOES
}