module.exports = (sequelize, dataTypes) => {
	let alias = "Os_rec";
		let cols = {
		id_os_rec: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		os_rec: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "os_rec",
		timestamps: false
	}
	
	const Os_rec = sequelize.define(alias, cols, config);
	
	Os_rec.associate = function(models){
		Os_rec.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}



	return Os_rec;
	}