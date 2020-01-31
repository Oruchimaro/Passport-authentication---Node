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

### Setting Up models and migrations
    Create aa file under models directory "lead.js"

    Then create a file under migrations folder "year+month+day+hour+min+name"

    then we can populate it with our databse schema and migrate it

    ```JS
        'use strict';
        module.exports = {

            up: (queryInterface, Sequelize) => {
                return queryInterface.createTable('leads',{
                    id: {
                        allowNull: false,
                        primaryKey: true,
                        type: Sequelize.UUID,
                        defaultValue: Sequelize.UUIDV4,
                    },
                    createdAt: {
                        allowNull: false,
                        type: Sequelize.DATE
                    },
                    updateAt : {
                        allowNull: false,
                        type: Sequelize.DATE
                    },
                    email: {
                        allowNull: false,
                        type: Sequelize.STRING
                    },
                });
            },
            down: (queryInterface, Sequelize) => {
                return queryInterface.dropTable('leads');
            }
        };

    ```` 

    $ sequelize db:migrate   or  $ npx sequelize-cli db:migrate

    Now if you check the databse you can see the table Leads is created.

    In models directory create a file "Lead.js"

    then populate it using this code, notice the similarity with migration file.

    ```JS
        'use strict';
        module.exports = (sequelize, DataTypes) => {

            var Lead = sequelize.define('Lead', {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
            });

            return Lead;
        };
    ```

    Sequelize will use this file for operating on database and sequelize will go to models folder and for each file it will generate the methds for it.

    Now go to bin/www file to initialize sequelize on models.


### Setting up passport.js authentication
    $ npm install passport passport-local  --save
    $ npm install bcrypt validator express-session connect-flash --save
    
