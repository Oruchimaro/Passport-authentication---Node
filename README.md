## What is this? 
    This is a web app using Node and express framework

## how to use this?
    Clone this directory
    cd into the directory
    $ npm install
    $ DEBUG=myapp:* npm start  -> to start the project
    $ npm start ->run a dev server 

## Development Docs:
### setting up:
    Go to expressjs.com, in documentation find express generator, follow the
    instructions on how to create a app.

### Setting batabase 
    Create a database , here i created 'passport_auth_node'
    then install "Sequelize"

    $ npm install --save sequelize
    $ npm install --save mysql2 //dirver for mysql
    $ npm install --save sequelize-cli

   create a file ".sequelizerc" for config and add this
   ```JS
        const path = require('path');

        module.exports = {
        'config': path.resolve('config', 'config.js'),
        'models-path': path.resolve('', 'models'),
        'seeders-path': path.resolve('', 'seeders'),
        'migrations-path': path.resolve('', 'migrations')
        }
   ```

    then run this command :
    $ sequelize init   or    $ npx sequelize-cli init

    Now you can go to config folder created and find config.js

    ```JS
        module.exports = {
        "development": {
            "username": "database user",
            "password": databse passwd ,
            "database": "database name",
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

    ```
<!-- 
    ```JS 
        const Sequelize = require('sequelize');

        const sequelize = new Sequelize(
            'database', 
            'username', 
            'password', 
            {
                host: 'localhost',
                dialect: 'mysql'
            });
    ``` -->
