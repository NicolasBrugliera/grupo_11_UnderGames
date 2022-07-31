const express = require('express');
const route = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');
const fs = require('fs')



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
  
 const upload = multer({storage}, {fileFilter}) 
 const multipleUpload = upload.fields(
  [
    {name: 'img_1', maxCount: 1}, 
    {name: 'img_2', maxCount: 1}, 
    {name: 'img_3', maxCount: 1},
    {name: 'img_4', maxCount: 1},
    {name: 'img_5', maxCount: 1}
  ]) 

//Validaciones

const validateForm = [
      body('title').notEmpty().withMessage('Title field must be complete'),
      body("one_word_descr").notEmpty().withMessage('One Word Description field must be complete').isLength({ min: 4 }).withMessage('Please choose a word with at least 4 words'),
      body("short_descr").notEmpty().withMessage('Short Description field must be complete').isLength({ min: 20 }, { min: 100 }).withMessage('Must contain from 20 to 100 letter words').bail(),
      body("long_descr").notEmpty().withMessage('Long Description field must be complete').isLength({ min: 800 }, { min: 1200 }).withMessage('Must contain from 800 to 1200 letter words').bail(),
      body("game_group").notEmpty().withMessage('Type of Suscription field must be complete'),
      body("category").notEmpty().withMessage('Category field must be complete'),
      body("creator").notEmpty().withMessage('Creator field must be complete'),
      body("original_price").notEmpty().withMessage('Original Price field must be complete'),
      body("price_w_discount").notEmpty().withMessage('Price with Discount field must be complete'),

      body("video_1").notEmpty().withMessage('Please enter Youtube video code or link'),
      body("miniatura").notEmpty().withMessage('Please enter Youtube video code or link'),
      body("launch_date").notEmpty().withMessage('Launch Date field must be complete'),
      body("platform").notEmpty().withMessage('Platform/s field must be complete'),
      body("os_min").notEmpty().withMessage('Minimum OS field must be complete'),
      body("os_rec").notEmpty().withMessage('Recommended OS field must be complete'),
      body("processor_min").notEmpty().withMessage('Minimum Processor field must be complete'),
      body("processor_rec").notEmpty().withMessage('Recommended Processor field must be complete'),
      body("storage_min").notEmpty().withMessage('Minimum Storage field must be complete'),
      body("storage_rec").notEmpty().withMessage('Recommended Storage field must be complete'),
      body("graphics_min").notEmpty().withMessage('Minimum Graphics field must be complete'),
      body("graphics_rec").notEmpty().withMessage('Recommended Graphics field must be complete'),
      body("age").notEmpty().withMessage('Age Restriction field must be complete').bail().isInt().withMessage('Must be a number'),
      
      


      body("img_1").custom((value, {req}) => {
        let file = req.files.img_1;
        let acceptedExtensions = [".png", ".jpeg", ".jpg"]
        if (!file) {
            throw new Error("Choose an Image with: " + acceptedExtensions + " extensions")
        }else if(file.size > (2560 * 1440 * 10)){
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            throw new Error("Image must be less than 15mb")
        }
        return true
    }),


    body("img_2").custom((value, {req}) => {
      let file = req.files.img_2;
      let acceptedExtensions = [".png", ".jpeg", ".jpg"]
      if (!file) {
          throw new Error("Choose an Image with: " + acceptedExtensions + " extensions")
      }else if(file.size > (2560 * 1440 * 10)){
          fs.unlink(file.path, (err) => {
              if (err) {
                  console.log(err)
              }
          })
          throw new Error("Image must be less than 15mb")
      }
      return true
  }),

    body("img_3").custom((value, {req}) => {
      let file = req.files.img_3;
      let acceptedExtensions = [".png", ".jpeg", ".jpg"]
      if (!file) {
          throw new Error("Choose an Image with: " + acceptedExtensions + " extensions")
      }else if(file.size < (1920 * 1080 * 10)){
          fs.unlink(file.path, (err) => {
              if (err) {
                  console.log(err)
              }
          })
          throw new Error("Image must be betweem 1920 x 1080 and 2560 x 1440")
      }
      return true
  }),


  body("img_4").custom((value, {req}) => {
    let file = req.files.img_4;
    let acceptedExtensions = [".png", ".jpeg", ".jpg"]
    if (!file) {
        throw new Error("Choose an Image with: " + acceptedExtensions + " extensions")
    }else if(file.size < (1920 * 1080 * 10)){
        fs.unlink(file.path, (err) => {
            if (err) {
                console.log(err)
            }
        })
        throw new Error("Image must be betweem 1920 x 1080 and 2560 x 1440")
    }
    return true
  }),

  body("img_5").custom((value, {req}) => {
    let file = req.files.img_5;
    let acceptedExtensions = [".png", ".jpeg", ".jpg"]
    if (!file) {
        throw new Error("Choose an Image with: " + acceptedExtensions + " extensions")
    }else if(file.size < (1920 * 1080 * 10)){
        fs.unlink(file.path, (err) => {
            if (err) {
                console.log(err)
            }
        })
        throw new Error("Image must be betweem 1920 x 1080 and 2560 x 1440")
    }
    return true
  }),




      
      
]

//rutas
route.get('/', controllerAdmin.adminList);

route.get('/create', controllerAdmin.create)  
route.post('/create', multipleUpload, validateForm, controllerAdmin.save)

route.get('/edit/:id', controllerAdmin.edit)
route.put('/edit/:id', multipleUpload, validateForm, controllerAdmin.update)

route.get('/delete/:id', controllerAdmin.viewDestroy)
route.delete('/delete/:id', controllerAdmin.destroy)




module.exports = route;