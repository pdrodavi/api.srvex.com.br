const express = require('express');
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'https://dlci.idevoc.com.br/api/dlci/'
const api = apiAdapter(BASE_URL)

router.post('/v1/crypt', (req, res) => {

    /*
        #swagger.description = 'Criptografia.'
        #swagger.produces = ['application/json']
    */

    /*    #swagger.parameters['Request'] = {
                in: 'body',
                schema: {
                    $sequence: 'string'
                }
        } */

    /* #swagger.responses[200] = {
      schema: {
            $encryptedString: '',
            $diKey: '',
            $publicKey: '',
            $privateKey: ''
      }
  } */

    api.post(BASE_URL+'/ci', req.body).then(resp => {
        res.send(resp.data)
    })
})

router.post('/v1/decrypt', (req, res) => {

    /*
        #swagger.description = 'Descriptografia.'
        #swagger.produces = ['application/json']
    */

    /*    #swagger.parameters['Request'] = {
                in: 'body',
                schema: {
                    $diKey: '',
                    $encryptedString: '',
                    $privateKey: '',
                    $publicKey: ''
                }
        } */

    /* #swagger.responses[200] = {
      schema: {
            $sequence: 'string'
      }
  } */

    api.post(BASE_URL+'/di', req.body).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router