module.exports = (sequelize, dataTypes) => {
	let alias = "Storage_min";
		let cols = {
		id_storage_min: {
			type: dataTypes.INTEGER, 
			primaryKey: true,
			autoIncrement: true
		},
		storage_min: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "storage_min",
		timestamps: false
	}
	
	const Storage_min = sequelize.define(alias, cols, config);
	
	Storage_min.associate = function(models){
		Storage_min.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}

	return Storage_min;
	}