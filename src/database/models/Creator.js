module.exports = (sequelize, dataTypes) => {
	let alias = "Creator";
		let cols = {
		id_creators: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nickname: {
			type: dataTypes.STRING
		},
		dribble: {
			type: dataTypes.STRING
		},
		twitter: {
			type: dataTypes.STRING
		},
		linkedin: {
			type: dataTypes.STRING
		},
		facebook: {
			type: dataTypes.STRING
		},
		creator_avatar: {
			type: dataTypes.STRING
		}
	
	};
	
	let config = {
		tableName: "creators",
		timestamps: false
	}
	
	const Creator = sequelize.define(alias, cols, config);
	
	Creator.associate = function(models){
		Creator.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
		
	};
	return Creator;
}