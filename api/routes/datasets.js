const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling datasets get'
    })
})


router.post('/:datasetId/rating', (req, res, next) => {
    const id = req.params.datasetId
    const rating = req.body.rating
    res.status(201).json({
        id: id,
        rating: rating
    })
})


router.get('/top', (req, res, next) => {
    res.status(200).json({
        message: 'Top rated datasets returned here'
    })
})


module.exports= router