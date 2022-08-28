module.exports = (sequelize, dataTypes) => {
	let alias = "Graphics_min";
		let cols = {
		id_graphics_min: {
			type: dataTypes.INTEGER, 
			primaryKey: true,
			autoIncrement: true
		},
		graphics_min: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "graphics_min",
		timestamps: false
	}
	
	const Graphics_min = sequelize.define(alias, cols, config);
	
	Graphics_min.associate = function(models){
		Graphics_min.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}

	return Graphics_min;
	}