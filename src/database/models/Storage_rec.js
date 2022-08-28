module.exports = (sequelize, dataTypes) => {
	let alias = "Storage_rec";
		let cols = {
		id_storage_rec: {
			type: dataTypes.INTEGER, 
			primaryKey: true,
			autoIncrement: true
		},
		storage_rec: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "storage_rec",
		timestamps: false
	}
	
	const Storage_rec = sequelize.define(alias, cols, config);
	
	Storage_rec.associate = function(models){
		Storage_rec.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}


	return Storage_rec;
	}