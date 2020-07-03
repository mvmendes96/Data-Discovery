//Packges
const express = require('express')
const request = require('request');
const esclient = require("./elastic");
const controller =   require('./src/controllers/controller_product_data.js');


//Iniciate Server
const { PORT = '3000' } = process.env
const app = express()

esclient.checkConnection()
  

//rotas
app.use('/data_discovery', require('./src/routes'));



app.listen(PORT)