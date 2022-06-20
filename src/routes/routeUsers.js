/*GET users listing. */

const express = require('express');
const app = express();
const routeUser = express.Router();
const controllerUser = require('../controllers/controllerUser');

//rutas
routeUser.get('/', controllerUser.userList);

/*users/register */

// router.get('/register', userController.register);
// router.get('/login', userController.login);
// router.get('/list', userController.list)

module.exports = routeUser;