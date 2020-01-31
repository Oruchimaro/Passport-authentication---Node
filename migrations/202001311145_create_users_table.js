'use strict';
module.exports = {

    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users',{
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: Sequelize.DATE,
            updatedAt : Sequelize.DATE,
            username: {
                allowNull: true,
                type: Sequelize.STRING
            },
            firstname: {
                allowNull: true,
                type: Sequelize.STRING
            },
            lastname: {
                allowNull: true,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            password: {
                allowNull: true,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};