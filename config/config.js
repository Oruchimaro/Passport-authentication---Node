module.exports = {
  "development": {
    "username": "itachi",
    "password": '3141',
    "database": "passport_auth_node",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false,
    "port" : 3306
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
