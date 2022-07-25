const express = require('express');
const router = express.Router();

// Controller
const controllerUser = require('../controllers/controllerUser');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario de registro
router.get('/register', guestMiddleware, controllerUser.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, controllerUser.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, controllerUser.login);

// Procesar el login
router.post('/login', controllerUser.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, controllerUser.profile);

// Logout
router.get('/logout/', controllerUser.logout);

module.exports = router;