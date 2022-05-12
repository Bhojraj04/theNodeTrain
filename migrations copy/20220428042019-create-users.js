'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact: {
        type: Sequelize.STRING
      },
      alternative_contact: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      pin_code: {
        type: Sequelize.INTEGER
      },
      dob: {
        type: Sequelize.DATE
      },
      download: {
        type: Sequelize.ENUM,
        values: [
          'pending',
          'downloaded',
        ],
        defaultValue: 'pending'
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};