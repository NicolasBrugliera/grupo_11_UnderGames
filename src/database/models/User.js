module.exports = (sequelize, dataTypes) => {
	let alias = "User";

	let cols = {
		id_users: {
		type: dataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
		},
		name: {
			type: dataTypes.STRING, 
			allowNull: false
		}, 
		surname: {
			type: dataTypes.STRING
		},
		email: {
			type: dataTypes.STRING, 
			allowNull: false
		}, 
		gamertag: {
			type: dataTypes.STRING
		},
		password: {
			type: dataTypes.STRING
		},
		repeted_password: {
			type: dataTypes.STRING
		},
		tos: {
			type: dataTypes.INTEGER
		},
		avatar: {
			type: dataTypes.STRING
		}
	};
	let config = {
		tableName: "users",
		timestamps: false
	}
	
	const User = sequelize.define(alias, cols, config);
	
/*  ver más adelante si se hace la asociacion con Cart */
	

	return User;
	}