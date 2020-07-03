const express = require('express');
const controller_product_data = require('./controllers/controller_product_data')


const routes = express.Router();



routes.get("/products", controller_product_data.index); 
routes.get("/all_projects", controller_product_data.all_projects); 
routes.get("/all_sources", controller_product_data.all_sources); 
module.exports = routes;