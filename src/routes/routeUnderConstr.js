const express = require('express');
const app = express();
const routeUnderConstr = express.Router();

const controllerUnderConstr = require('../controllers/controllerUnderConstr');

routeUnderConstr.get('/', controllerUnderConstr.underConstr);





module.exports = routeUnderConstr;