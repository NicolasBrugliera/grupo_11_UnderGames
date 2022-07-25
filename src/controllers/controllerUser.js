const path = require('path');
const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');

const User = require('../models/User');

const controller = {
	register: (req, res) => {
		return res.render(path.resolve(__dirname, '../views/users/register'));
		//return res.render('/users/register');
	},
	processRegister: (req, res) => {
		//console.log('ingresa a processRegister');
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render((path.resolve(__dirname, '../views/users/register')), {
			//return res.render('/users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render((path.resolve(__dirname, '../views/users/register')), {
			//return res.render('/users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		let userCreated = User.create(userToCreate);
		return res.redirect(path.resolve(__dirname, '../views/users/login'));
		//return res.redirect('/users/login');
	},
	login: (req, res) => {
		//console.log('entra a login');
		return res.render(path.resolve(__dirname, '../views/users/login'));
		//return res.render('/users/login');
	},
	loginProcess: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				//console.log('isOkThePassword');
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
				//console.log('redirecciona a index con:');
				//console.log(req.session.userLogged);
				return res.redirect('../');
				
				
				//return res.redirect('/user/profile');
			} 
			//console.log('renderea a login dentro de isOkThePassword');
			return res.render((path.resolve(__dirname, '../views/users/login')), {
			//return res.render('login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}
		//console.log('renderea a login despues de if(userToLogin)');
		return res.render((path.resolve(__dirname, '../views/users/login')), {
		//return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
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
	}
}

module.exports = controller;