const express = require('express');
const router = express.Router();
const path = require('path');
const routerProductDetail = express.Router();
const app = express();

//controller require
const controllerDetail = require('../controllers/controllerProductDetail');
//const  productEdit  = require('../controllers/controllerProducts');

routerProductDetail.get('/:id', controllerDetail.productDetail);

module.exports = routerProductDetail;

