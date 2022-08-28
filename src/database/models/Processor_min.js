module.exports = (sequelize, dataTypes) => {
	let alias = "Processor_min";
		let cols = {
		id_processor_min: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		processor_min: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "processor_min",
		timestamps: false
	}
	
	const Processor_min = sequelize.define(alias, cols, config);
	
	Processor_min.associate = function(models){
		Processor_min.hasMany(models.Game, {
			as: "game",
			foreignKey: "id_game"
		})
	}


	return Processor_min;
	}