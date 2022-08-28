module.exports = (sequelize, dataTypes) => {
	let alias = "Game";
		let cols = {
		id_game: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		oldImage1: {
			type: dataTypes.STRING
		},
		oldImage2: {
			type: dataTypes.STRING
		},
		oldImage3: {
			type: dataTypes.STRING
		},
		oldImage4: {
			type: dataTypes.STRING
		},
		oldImage5: {
			type: dataTypes.STRING
		},
		title: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		one_word_descr: {
			type: dataTypes.STRING
		},
		short_descr: {
			type: dataTypes.TEXT('medium')
		},
		long_descr: {
			type: dataTypes.TEXT('long')
		},
		original_price: {
			type: dataTypes.FLOAT(11,2)
		},
		price_w_discount: {
			type: dataTypes.FLOAT(11,2)
		},
		discount: {
			type: dataTypes.INTEGER
		},
		video_1: {
			type: dataTypes.TEXT('medium')
		},
		miniatura: {
			type: dataTypes.TEXT('medium')
		},
		launch_date: {
			type: dataTypes.DATEONLY
		},
		img_1: {
			type: dataTypes.STRING
		},
		img_2: {
			type: dataTypes.STRING
		},
		img_3: {
			type: dataTypes.STRING
		},
		img_4: {
			type: dataTypes.STRING
		},
		img_5: {
			type: dataTypes.STRING
		},
		id_category: {
			type: dataTypes.INTEGER
		},
		id_game_group: {
			type: dataTypes.INTEGER
		},
		id_platforms: {
			type: dataTypes.INTEGER
		},
		id_os_min: {
			type: dataTypes.INTEGER
		},
		id_os_rec: {
			type: dataTypes.INTEGER
		},
		id_processor_min: {
			type: dataTypes.INTEGER
		},
		id_processor_rec: {
			type: dataTypes.INTEGER
		},
		id_storage_min: {
			type: dataTypes.INTEGER
		},
		id_storage_rec: {
			type: dataTypes.INTEGER
		},
		id_graphics_min: {
			type: dataTypes.INTEGER
		},
		id_graphics_rec: {
			type: dataTypes.INTEGER
		}
		
	};
	

	
	let config = {
		tableName: "games",
		timestamps: false
	}
	
	const Game = sequelize.define(alias, cols, config);
	

	Game.associate = function(models){
	Game.belongsTo(models.Category, {
			as: "category",
			foreignKey: "id_category" 
		}),

	Game.belongsTo(models.Creator, {
			as: "creator",
			foreignKey: "id_creators" 
		}),

	Game.belongsTo(models.Game_group, {
			as: "game_group",
			foreignKey: "id_game_group" 
			
		}),
	Game.belongsTo(models.Platform, {
			as: "platform",
			foreignKey: "id_platforms"
		}),
	Game.belongsTo(models.Graphics_min, {
			as: "graphics_min",
			foreignKey: "id_graphics_min"
		}),
	Game.belongsTo(models.Graphics_rec, {
			as: "graphics_rec",
			foreignKey: "id_graphics_rec"
		}),
	Game.belongsTo(models.Processor_min, {
			as: "processor_min",
			foreignKey: "id_processor_min"
		}),
		Game.belongsTo(models.Processor_rec, {
			as: "processor_rec",
			foreignKey: "id_processor_rec"
		}),
		Game.belongsTo(models.Os_min, {
			as: "os_min",
			foreignKey: "id_os_min"
		}),
		Game.belongsTo(models.Os_rec, {
			as: "os_rec",
			foreignKey: "id_os_rec"
		}),
		Game.belongsTo(models.Storage_min, {
			as: "storage_min",
			foreignKey: "id_storage_min"
		}),
		Game.belongsTo(models.Storage_rec, {
			as: "storage_rec",
			foreignKey: "id_storage_rec"
		})
		
		
		/*Game.belongsToMany(models.Creator, {
			as: 'creator',
			through: 'games_has_creators',
			foreignKey: 'id_game',
			otherKey: 'id_creators',
			onDelete: 'CASCADE',
			timestamps: false
		})*/
		
		}



	return Game;
	}