const { name } = require('ejs');
const db = require('../database/models');

const sequelize = db.sequelize;

const apiControllerUser = {
		list: (req, res)=>{
			db.User.findAll({
				attributes: [['id_users', 'id'] , 'name', 'email', [sequelize.fn('concat', (req.protocol + "://"+ req.get('Host') ) , "/api/users/detail/" , sequelize.col('id_users')), 'detail']]
			}) 
			
			.then(users => {
				let response = {
					info: {
						status: 200,
						total: users.length, 
						url: (req.protocol + "://"+ req.get('Host')  + "api/users/list")
						},
					data: { count: users.length, 
							users 

						},
					}
				res.json(response)
			})
			.catch(e => {
				let response = {
					info: {
						status: 404,
						url: req.protocol + "://"+ req.get('Host')  + "api/users/list", 
						error: e
			},
			}
				res.json(response)
		})
		},
		detail: (req, res)=>{
			db.User.findByPk(req.params.id ,      
			{attributes: [['id_users', 'id'], 'name', 'email', [sequelize.fn('concat', (req.protocol + "://"+ req.get('Host') ) , "/images/avatars/" , sequelize.col('avatar')), 'detail']]})
				.then(user => {
				let response = {
					info:{
						status: 200,
						url: req.protocol + "://"+ req.get('Host')  + "api/users/detail/" + req.params.id  
					},
					data: user
				}
				res.json(response)
			})
			.catch(e => {
				let response = {
					info: {
						status: 404,
						url: req.protocol + "://"+ req.get('Host')  + "api/users/detail/" + req.params.id  ,
						error: e
			},
			}
				res.json(response)
		})
			
	}}

	module.exports = apiControllerUser;