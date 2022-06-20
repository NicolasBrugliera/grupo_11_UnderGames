//express y route
const express = require('express');
const app = express();
const routeProductCart = express.Router();
//controlador
const controllerProductCart = require('../controllers/controllerProductCart');

//rutas
routeProductCart.get('/', controllerProductCart.productCart);




//Modulo exportado
module.exports = routeProductCart;