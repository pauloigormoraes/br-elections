const CONST = require('app/bin/CONST')
const mongoose = require('mongoose')

mongoose.connect(CONST.MONGODB_CONNECT.URL, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise
module.exports = { bens_candidatos: require('../../schems/bens_candidatos') }