const express = require('express');
const route = express.Router();
const path = require('path')
const multer = require('multer')


const controllerAdmin = require(path.join(__dirname,'../controllers/controllerAdmin'));


//Subir archivo mediante Multer  (nombre archivo , ruta donde guardar)
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public'))
    },

    filename: function (req, file, cb) {
        cb(null, '/images/'+ Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)) //importante usar Math Random para subidas múltiples 
    }
    
  })
  
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
route.post('/create', multipleUpload, controllerAdmin.save)



module.exports = route;