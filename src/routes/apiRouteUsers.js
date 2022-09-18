const express = require('express');
const router = express.Router();
const apiControllerUser = require('../controllers/apiControllerUser');
	
router.get('/list', apiControllerUser.list);
router.get('/detail/:id', apiControllerUser.detail);
	
module.exports = router;