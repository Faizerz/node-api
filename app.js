const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended: false}))
app.unsubscribe(bodyParser.json)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'POST, GET')
    return res.status(200).json({})
  }
})

const productRoutes = require('./api/routes/datasets')

app.use('/datasets', productRoutes)

module.exports = app
