module.exports = (sequelize, dataTypes) => {
	let alias = "Processor_rec";
		let cols = {
		id_processor_rec: {
			type: dataTypes.INTEGER, 
			primaryKey: true,
			autoIncrement: true
		},
		processor_rec: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "processor_rec",
		timestamps: false
	}
	
	const Processor_rec = sequelize.define(alias, cols, config);
	
	Processor_rec.associate = function(models){
		Processor_rec.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}


	return Processor_rec;
	}