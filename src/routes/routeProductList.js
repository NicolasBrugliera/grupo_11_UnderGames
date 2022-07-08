const express = require('express');
const router = express.Router();
const path = require('path');
const routerProductList = express.Router();

const controllerProductList = require(path.join(__dirname,'../controllers/controllerProductList'));

//rutas
routerProductList.get('/', controllerProductList.productList);

//Modulo exportado

module.exports = routerProductList;



