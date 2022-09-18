const express = require('express');
const router = express.Router();
const apiControllerProduct = require('../controllers/apiControllerProduct');
	
router.get('/list', apiControllerProduct.list);
router.get('/detail/:id', apiControllerProduct.detail);
	
module.exports = router;