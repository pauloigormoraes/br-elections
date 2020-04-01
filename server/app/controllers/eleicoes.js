const express = require('express')
const router = express.Router()
const services = require('../services/eleicoes')

// GET ###########################################################
router.get('/api/bens-candidatos', __get__bens__candidatos)
router.get('/api/candidatos', __get__candidatos)

function __get__bens__candidatos(req, res, next) {
    services.__get__bens__candidatos()
        .then(bens => res.json(bens))
        .catch(err => next(err))
}

function __get__candidatos(req, res, next) {
    services.__get__candidatos()
        .then(candidatos => res.json(candidatos))
        .catch(err => next(err))
}

// POST ###########################################################
router.post('/api/bens-candidatos', __create__bens__candidatos)
router.post('/api/candidatos', __create__candidatos)

function __create__bens__candidatos(req, res, next) {
    services.__create__bens__candidatos(req.body.page, req.body.size)
        .then(response => res.json(response))
        .catch(err => next(err))
}

function __create__candidatos(req, res, next) {
    services.loading__data(req.body.page, req.body.size)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = router;