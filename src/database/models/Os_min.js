module.exports = (sequelize, dataTypes) => {
	let alias = "Os_min";
		let cols = {
		id_os_min: {
			type: dataTypes.INTEGER, 
			primaryKey: true,
			autoIncrement: true
		},
		os_min: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "os_min",
		timestamps: false
	}
	
	const Os_min = sequelize.define(alias, cols, config);
	
	Os_min.associate = function(models){
		Os_min.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}


	return Os_min;
	}