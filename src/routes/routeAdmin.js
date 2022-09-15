const express = require('express');
const route = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs')

const validations = require('../middlewares/validateProductsMiddleware');
const { fields } = require('../middlewares/multerMiddleware');
//import validations from '../middlewares/validateProductsMiddleware'

const controllerAdmin = require(path.join(__dirname,'../controllers/controllerAdmin'));


//Subir archivo mediante Multer  (nombre archivo , ruta donde guardar)
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/'))
    },
    filename: function (req, file, cb) {
      //importante usar Math Random para subidas múltiples 
        cb(null, '/images/games/' + 'game-image-' + Date.now() + Math.round(Math.random() * 10e10) + path.extname(file.originalname)) 
    }
    

    
  })

//multer valida que ninguno de los fields ingrese un archivo que no sea imagen y que esta no sea mayor a 1 Mb
  const multipleUpload = multer({
    storage, 
    limits: {fileSize: 1000000, files: 5}, // determina el tamaño aceptado 1000000 bytes = 1 Mb
    fileFilter: function(req, file, cb){
      let type = file.mimetype.startsWith('image/');
      type ? cb(null, true) : cb ( new Error('no es un archivo imagen')) // si es de tipo imagen retorna el callback de multer como true, sino error
    }}
    ).fields([
      {name: 'img_1', maxCount: 1}, 
      {name: 'img_2', maxCount: 1}, 
      {name: 'img_3', maxCount: 1},
      {name: 'img_4', maxCount: 1},
      {name: 'img_5', maxCount: 1}
    ])


//rutas
route.get('/', controllerAdmin.adminList);

route.get('/create', controllerAdmin.create)  
route.post('/create', multipleUpload, validations, controllerAdmin.save)


route.get('/edit/:id', controllerAdmin.edit)
route.put('/edit/:id', multipleUpload, validations, controllerAdmin.update)

route.get('/delete/:id', controllerAdmin.viewDestroy)
route.delete('/delete/:id', controllerAdmin.destroy)




module.exports = route;