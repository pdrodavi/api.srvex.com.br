const express = require('express');
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'https://viacep.com.br/ws/'
const api = apiAdapter(BASE_URL)

router.get('/v1/address/:zipcode', (req, res) => {

    /*
        #swagger.description = 'Consultar endereço por CEP.'
        #swagger.produces = ['application/json']
        #swagger.parameters['zipcode'] = { description: 'CEP', example: '58900000' }
    */

    api.get(req.params.zipcode + '/json/').then(resp => {
        res.send(resp.data)
    })
})

module.exports = router