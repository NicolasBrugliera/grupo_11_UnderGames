const db = require('../database/models');
const { concat } = require('../middlewares/validateRegisterMiddleware');
const sequelize = db.sequelize;

const reducer = (map, val) => {
	if (map[val] == null) {
	map[val] = 1;
	} else {
	++map[val];
	}
	return map;
}; 

	const apiControllerProduct = {
		list: (req, res)=>{
			db.Game.findAll({
				include: [{association: "category"}],
				attributes: [['id_game', 'id'], ['title', 'name'], ['short_descr', 'description'], 
				[sequelize.fn('concat', (req.protocol + "://"+ req.get('Host') ) , "/api/products/detail/" , sequelize.col('id_game')), 'detail']]
				})
								
			.then(products => {
				let response = {
				info: {
						status: 200,
						total: products.length, 
						url: (req.protocol + "://"+ req.get('Host')  + "/api/products/list")
						}, 
					data: {
						count: products.length,
						countByCategory: products.map(categ => categ.category.category).reduce(reducer, {}),
						products
						},
						}
						res.json(response)
			
			})
			.catch(e => {
				let response = {
					info: {
						status: 404,
						url: (req.protocol + "://"+ req.get('Host')  + "/api/products/list"), 
						error: e
			},
			}
				res.json(response)
		})
    },
		detail: (req, res)=>{
			db.Game.findByPk(req.params.id,  
				{
					include: [{all: true}],

					attributes: ['id_game', 'title', 'one_word_descr', 'short_descr', 
					'long_descr', 'original_price', 'price_w_discount', 'discount', 
					'video_1', 'miniatura', 'launch_date', 
					[sequelize.fn('concat', (req.protocol + "://" + req.get('Host') ) ,  sequelize.col('img_1')), 'img_1'], 
					[sequelize.fn('concat', (req.protocol + "://" + req.get('Host') ) ,  sequelize.col('img_2')), 'img_2'],
					[sequelize.fn('concat', (req.protocol + "://" + req.get('Host') ) ,  sequelize.col('img_3')), 'img_3'],
					[sequelize.fn('concat', (req.protocol + "://" + req.get('Host') ) ,  sequelize.col('img_4')), 'img_4'],
					[sequelize.fn('concat', (req.protocol + "://" + req.get('Host') ) ,  sequelize.col('img_5')), 'img_5'],
					'id_category', 'id_game_group', 'id_platforms', 'id_os_min',  'id_os_rec', 
					'id_processor_min', 'id_processor_rec', 'id_storage_min', 'id_storage_rec', 
					'id_graphics_min', 'id_graphics_rec', 'id_creators',

					[sequelize.fn('concat', (req.protocol + "://"+ req.get('Host') ) , "/api/products/detail/" , sequelize.col('id_game')), 'detail']]
					}
				)
			.then(game => {
				let response = {
					info:{
						status: 200,
						url: req.protocol + "://"+ req.get('Host') + "/api/products/detail/" + req.params.id  
					},
					data: game
				}
				res.json(response)
			})
			.catch(e => {
				let response = {
					info: {
						status: 404,
						url: req.protocol + "://"+ req.get('Host') + "/api/products/detail/" + req.params.id  ,
						error: e
			},
			}
				res.json(response)
		})
	}}

	module.exports = apiControllerProduct;