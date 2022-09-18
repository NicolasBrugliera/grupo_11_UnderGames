const db = require('../database/models');
const sequelize = db.sequelize;
	
	const apiControllerProduct = {
		list: (req, res)=>{
			db.Game.findAll()
			.then(products => {
				let response = {
					info: {
						status: 200,
						total: products.length, 
						url: "api/products/list"
						},
					data: products	
				}
				res.json(response)
			
			})
			.catch(e => {
				let response = {
					info: {
						status: 404,
						url: "api/products/list", 
						error: e
			},
			}
				res.json(response)
		})
    },
		detail: (req, res)=>{
			db.Game.findByPk(req.params.id)
			.then(game => {
				let response = {
					info:{
						status: 200,
						url: "api/products/detail/" + req.params.id  
					},
					data: game
				}
				res.json(response)
			})
	}}

	module.exports = apiControllerProduct;