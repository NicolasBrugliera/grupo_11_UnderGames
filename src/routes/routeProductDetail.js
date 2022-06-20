const express = require('express');
const app = express();
const routeProductDetail = express.Router();

const controllerDetail = require('../controllers/controllerProductDetail');

routeProductDetail.get('/', controllerDetail.productDetail);





module.exports = routeProductDetail;

