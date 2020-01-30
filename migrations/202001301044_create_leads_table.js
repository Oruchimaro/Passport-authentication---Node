'use strict';
module.exports = {

    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Leads',{
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: Sequelize.DATE,
            updatedAt : Sequelize.DATE,
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Leads');
    }
};