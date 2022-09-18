const db = require('../database/models');
const sequelize = db.sequelize;
	
	const apiControllerUser = {
		list: (req, res)=>{
			db.User.findAll()
			.then(users => {
				let response = {
					info: {
						status: 200,
						total: users.length, 
						url: "api/users/list"
						},
					data: users	
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
			db.User.findByPk(req.params.id)
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