module.exports = (sequelize, dataTypes) => {
	let alias = "Platform";
		let cols = {
		id_platforms: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		platform_descr: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "platforms",
		timestamps: false
	}
	
	const Platform = sequelize.define(alias, cols, config);
	
	Platform.associate = function(models){
		Platform.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}


	return Platform;
	}