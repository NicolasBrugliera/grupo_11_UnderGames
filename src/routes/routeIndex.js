const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const controllerIndex = require(path.join(__dirname,'../controllers/controllerIndex'));

router.get('/', controllerIndex.index);
router.get('/home', controllerIndex.index);
router.get('/index', controllerIndex.index);

module.exports = router;
