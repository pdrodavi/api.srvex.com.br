const express = require('express');
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'https://apidate.herokuapp.com/api/check-day/'
const api = apiAdapter(BASE_URL)

router.get('/v1/business-date/:date', (req, res) => {

    /*
        #swagger.description = 'Checar se dia é útil.'
        #swagger.produces = ['application/json']
        #swagger.parameters['date'] = { description: 'Data', example: '29042022' }
    */

    /* #swagger.responses[200] = {
      schema: {
            $data: '',
            $diaDaSemana: '',
            $util: '',
            $msg: ''
      }
  } */

    api.get(req.params.date).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router