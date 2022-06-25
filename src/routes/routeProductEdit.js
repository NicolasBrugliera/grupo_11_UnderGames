//express y route
const express = require('express');
const app = express();
const routeProductEdit = express.Router();
//controlador
const controllerProductEdit = require('../controllers/controllerProductEdit');

//rutas
routeProductEdit.get('/', controllerProductEdit.productEdit);




//Modulo exportado
module.exports = routeProductEdit;