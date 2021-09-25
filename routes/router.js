const express = require('express');
const router = express.Router()

const dateService = require('./dateService')
const dlciService = require('./dlciService')
const zipcodeService = require('./zipcodeService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(dateService)
router.use(dlciService)
router.use(zipcodeService)

module.exports = router