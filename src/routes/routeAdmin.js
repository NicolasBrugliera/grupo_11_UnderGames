const express = require('express');
const route = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs')

const validations = require('../middlewares/validateProductsMiddleware');
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

  const fileFilter = (req, file, cb) => {
    if ((file.mimetype).includes("jpeg") || (file.mimetype).includes("png") || (file.mimetype).includes("jpg")) {
      
        cb(null, true);
    }
    else {
       
        cb(null, false)
        req.fileError = "File format not valid";
    }
}
 
 const upload = multer({storage}) 
 const multipleUpload = upload.fields(
  [
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