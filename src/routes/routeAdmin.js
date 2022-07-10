/*GET users listing. */

const express = require('express');
const route = express.Router();
const path = require('path')
const multer = require('multer')


const controllerAdmin = require(path.join(__dirname,'../controllers/controllerAdmin'));


//Subir archivo mediante Multer  (nombre archivo , ruta donde guardar)
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/images/games'))
    },

    filename: function (req, file, cb) {
        cb(null, 'img-'+ Date.now()+path.extname(file.originalname))
    }
    
  })
  
  const upload = multer({storage}) 

////////////////////////////////////////////////////////////////

//rutas
route.get('/', controllerAdmin.adminList);
route.get('/create', controllerAdmin.create)
route.post('/create'/*  upload.single('image'), */, upload.fields([
  {
    name: 'img_1', maxCount: 1
  }, 
  {
    name: 'img_2', maxCount: 1
  },
  {
    name: 'img_3', maxCount: 1
  },
  {
    name: 'img_4', maxCount: 1
  },
  {
    name: 'img_', maxCount: 1
  },
]), controllerAdmin.save)



module.exports = route;