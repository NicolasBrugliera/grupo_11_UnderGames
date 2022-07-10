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
route.post('/create',  upload.single('image'), controllerAdmin.save)



module.exports = route;