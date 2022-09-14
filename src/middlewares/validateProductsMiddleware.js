const path = require('path');
const { body } = require('express-validator');


 module.exports = [
 	body('title').notEmpty().withMessage('Title field must be complete'),
	body("one_word_descr").notEmpty().withMessage('One Word Description field must be complete').isLength({ min: 4 }).withMessage('Please choose a word with at least 4 words'),
	body("short_descr").notEmpty().withMessage('Short Description field must be complete').isLength({ min: 20 }, { min: 100 }).withMessage('Must contain from 20 to 100 letter words').bail(),
	body("long_descr").notEmpty().withMessage('Long Description field must be complete').isLength({ min: 100 }, { min: 300 }).withMessage('Must contain from 100 to 300 letter words').bail(),
	body("game_group").notEmpty().withMessage('Game Group field must be complete'),
	body("category").notEmpty().withMessage('Category field must be complete'),
	//body("creator").notEmpty().withMessage('Creator field must be complete'),
	body("video_1").notEmpty().withMessage('Please enter Youtube video code or link'),
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
	body("age").isInt().withMessage('Age field cannot be empty and must be a number'),
	
	


	body("img_1").custom((value, {req}) => {
	  let file = req.files.img_1;
	  let acceptedExtensions = [".png", ".jpeg", ".jpg"]
	  if (!file) {
		  throw new Error("Please choose an image")
	  }else if(file.size > (10 * 1024 * 1024)){
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
		throw new Error("Please choose an image")
	}else if(file.size > (10 * 1024 * 1024)){
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
		throw new Error("Please choose an image")
	}else if(file.size > (10 * 1024 * 1024)){
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
		throw new Error("Please choose an image")
	}else if(file.size > (10 * 1024 * 1024)){
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
		throw new Error("Please choose an image")
	}else if(file.size > (10 * 1024 * 1024)){
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


