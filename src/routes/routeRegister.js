const express = require('express');
const app = express();
const routeRegister = express.Router();

const controllerRegister = require('../controllers/controllerRegister');

routeRegister.get('/', controllerRegister.register);





module.exports = routeRegister;