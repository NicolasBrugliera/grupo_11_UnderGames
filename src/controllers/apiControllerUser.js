const { name } = require('ejs');
const db = require('../database/models');
/*const { concat } = require('../middlewares/validateRegisterMiddleware');*/
const sequelize = db.sequelize;

const apiControllerUser = {
		list: (req, res)=>{
			db.User.findAll({
				attributes: ['id_users', 'name', 'email', [sequelize.fn('concat', (req.protocol + "://"+ req.get('Host') ) , "/api/users/detail/" , sequelize.col('id_users')), 'url']]
			}) 
			
			.then(users => {
				let response = {
					info: {
						status: 200,
						total: users.length, 
						url: "api/users/list"
						},
					data: {
							users 

						},
					}
				res.json(response)
			})
			.catch(e => {
				let response = {
					info: {
						status: 404,
						url: "api/users/list", 
						error: e
			},
			}
				res.json(response)
		})
		},
		detail: (req, res)=>{
			db.User.findByPk(req.params.id ,      /* src="/images/avatars/<%= user.avatar %> " > */
			{attributes: ['id_users', 'name', 'email', [sequelize.fn('concat', (req.protocol + "://"+ req.get('Host') ) , "/images/avatars/" , sequelize.col('avatar')), 'url']]})
				.then(user => {
				let response = {
					info:{
						status: 200,
						url: "api/users/detail/" + req.params.id  
					},
					data: user
				}
				res.json(response)
			})
	}}

	module.exports = apiControllerUser;