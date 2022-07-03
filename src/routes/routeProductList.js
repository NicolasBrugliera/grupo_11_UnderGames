const express = require('express');
const router = express.Router();
const path = require('path');

const controllerProductList = require(path.join(__dirname,'../controllers/controllerProductList'));

//rutas
router.get('/productList', controllerProductList.productList);

//Modulo exportado

module.exports = router;



