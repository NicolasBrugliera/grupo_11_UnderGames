const path = require('path');
const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');
const db = require('../database/models');

const controller = {
	register: (req, res) => {
		//console.log('entra a register');
		return res.render(path.resolve(__dirname, '../views/users/register'));
		
	}, 

	processRegister: (req, res) => {
		console.log('ingresa a processRegister');
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render((path.resolve(__dirname, '../views/users/register')), {
			//return res.render('../users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		//let emailParaBuscar = req.body.email;

		db.User.findOne({ where: { email: req.body.email } })
		.then((userInDB) => {   
		
		//if (userInDB) {
		if(userInDB == req.body.email){ 	
			console.log('valida usuario ya registrado')
			return res.render((path.resolve(__dirname, '../views/users/register')), {
			errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}
	})
		console.log('entra a Create')
		db.User
        .create(
            {
                name: req.body.name, 
				surname: req.body.surname, 
				email: req.body.email, 
				gamertag: req.body.gamertag, 
				password: bcryptjs.hashSync(req.body.password, 10), 
				repeted_password: req.body.repeted_password, 
				tos: req.body.tos, 
				avatar: req.file.filename
            }
			)
			/* ver el tema de repeted_password, si es necesario, quizás no se deba guardar, con la validación  */
		.then(()=> {
			return res.render(path.resolve(__dirname, '../views/users/login'))})
		.catch(error => res.send(error))
	},


	login: (req, res) => {
	//console.log('entra a login');
		return res.render(path.resolve(__dirname, '../views/users/login'));
		//return res.render('/users/login');
	},

	loginProcess: (req, res) => {
		
	//	console.log('en loginProcess');

		db.User.findOne({ where: { email: req.body.email } })
		.then((usuario) => { 

	//	console.log(usuario);
		if(usuario) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, usuario.password);
			if (isOkThePassword) {
	//			console.log('isOkThePassword');
				delete usuario.password;
				req.session.userLogged = usuario;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
	//			console.log('redirecciona a index con:');
	//			console.log(req.session.userLogged);
				return res.redirect('../');
				
				
				//return res.redirect('/user/profile');
			} 
		}
	//		console.log('renderea a login después de isOkThePassword');
			return res.render((path.resolve(__dirname, '../views/users/login')), {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			})
		

		}
	
	)},
			
	profile: (req, res) => {
		return res.render((path.resolve(__dirname, '../views/users/profile')),{
		//return res.render('/users/profile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	} ,

	edit: function(req,res) {
        db.User.findOne({ where: { id_users: req.params.id } })
		.then((usuario) =>{
			return res.render(path.resolve(__dirname, '../views/users/edit'), {userToEdit: usuario})})
        .catch(error => res.send(error))
    },

    update: function (req,res) {
        db.User.findOne({ where: { id_users: req.params.id } })
		.then((usuario) =>{		
		db.User
        .update(
            {
                name: req.body.name,
                surname: req.body.surname,
                gamertag: req.body.gamertag
            },
            {
                where: {id_users: usuario}
            })
		.then(()=> {
			return res.redirect(path.resolve(__dirname, '../views/users/profile'))})            
        .catch(error => res.send(error))
    })},

	viewDestroy:(req,res)=>{
        db.User.findOne({ where: { id_users: req.params.id } })
		.then((userToDelete) => { 
        res.render(path.join(__dirname, '../views/users/delete'), {userToDelete})})
        .catch(error => res.send(error))
    },

    destroy:(req, res)=> {
        db.User
		.destroy({where: {id_users: req.params.id}, force: true}) 
        .then(()=>{
			res.clearCookie('userEmail');
			req.session.destroy();
			return res.redirect('/')})
        .catch(error => res.send(error)) 
    }

}

module.exports = controller;