const request = require('request')
const CONST = require('app/bin/CONST')

const bens_candidatos = require('app/helpers/connect/bens_candidatos')
const BensCandidatos = bens_candidatos.bens_candidatos

const candidatos = require('app/helpers/connect/candidatos')
const Candidatos = candidatos.candidatos


// POST - CREATE ITEMS ################################
async function __create__bens__candidatos(page, size) {
  try {
    request(CONST.URL_BENS_CANDIDATOS + page, function (error, response, data) {
      for(let item = page; item <= size; item++) {
        request(CONST.URL_BENS_CANDIDATOS + item, function (error, response, data) {
          const values = JSON.parse(data)
          for(let element in values.results) {
            let bens_candidatos = new BensCandidatos(values.results[element])
            bens_candidatos.save()
            console.log("PAGE #"+ item + " item $" + element)
            console.log("____________")
          }
        })
      }
    })
  } catch (e) {
    throw e.message
  }
}

async function __create__candidatos(page, size) {
  try {
      for(let item = page; item <= size; item++) { 
        request(CONST.URL_CANDIDATOS + item, function (error, response, data) {
          const values = JSON.parse(data)
          for(let element in values.results) {
            let candidatos = new Candidatos(values.results[element])
            candidatos.save()            
            console.log("PÁGINA ###" + item)
          }
        })
      }
  } catch (e) {
    throw e.message
  }
}

function loading__data(page, size) {
  var interval = 10
  setInterval(function() {
    __create__candidatos(page, size)
    page += interval
    size += interval
  }, 60000)
  throw "coletando dados..."
}

// GET - LIST ITEMS ################################
async function __get__bens__candidatos() {
  try {
    return await BensCandidatos.find()
  } catch (e) {
    throw e.message
  }
}

async function __get__candidatos() {
  try {
    return await Candidatos.find()
  } catch (e) {
    throw e.message
  }
}

module.exports = {
    __create__bens__candidatos,
    __create__candidatos,
    __get__bens__candidatos,
    __get__candidatos,

    loading__data
}