require('dotenv').config();

	module.exports = {
	"development": {
		"username": process.env.DB_USER,
		"password": process.env.DB_PASS,
		"database": process.env.DB_NAME,
		"host": process.env.DB_HOST,
		"port": process.env.DB_PORT,
		"dialect": "mysql",
		"logging": false,
		"operatorsAliases": 0
	},
	"test": {
		"username": "root",
		"password": null,
		"database": "database_test",
		"host": "127.0.0.1",
		"dialect": "mysql",
		"operatorsAliases": 0
	},
	"production": {
		"username": process.env.DB_USER,
		"password": process.env.DB_PASS,
		"database": process.env.DB_NAME,
		"host": process.env.DB_HOST,
		"dialect": "mysql",
		"operatorsAliases": 0
	}
	}



/*module.exports = 
{
  "development": {
    "username": "root",
    "password": null,
    "database": "undergames_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
*/
