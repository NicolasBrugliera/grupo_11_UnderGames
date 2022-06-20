const express = require('express');
const app = express();
const routeLogin = express.Router();

const controllerLogin = require('../controllers/controllerLogin');

routeLogin.get('/', controllerLogin.login);





module.exports = routeLogin;