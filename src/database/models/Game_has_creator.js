module.exports = (sequelize, dataTypes) => {
	let alias = "Games_has_creator";
		let cols = {
		id_games_has_creators: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		games_id_game: {
			type: dataTypes.INTEGER
		},
		creators_id_creators: {
			type: dataTypes.INTEGER
		}
	};
	
 
	
	let config = {
		tableName: "games_has_creators",
		timestamps: false
	}
	
	const Game_has_creator = sequelize.define(alias, cols, config);
	
	return Game_has_creator;
	}