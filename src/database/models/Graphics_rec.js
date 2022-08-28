module.exports = (sequelize, dataTypes) => {
	let alias = "Graphics_rec";
		let cols = {
		id_graphics_rec: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		graphics_rec: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "graphics_rec",
		timestamps: false
	}
	
	const Graphics_rec = sequelize.define(alias, cols, config);
	
	Graphics_rec.associate = function(models){
		Graphics_rec.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}


	return Graphics_rec;
	}