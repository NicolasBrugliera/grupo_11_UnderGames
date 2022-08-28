module.exports = (sequelize, dataTypes) => {
	let alias = "Game_group";
		let cols = {
		id_game_group: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		game_group: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "game_group",
		timestamps: false
	}
	
	const Game_group = sequelize.define(alias, cols, config);
	
	Game_group.associate = function(models){
		Game_group.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}

	return Game_group;
	}