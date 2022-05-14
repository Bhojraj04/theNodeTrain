'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'add_column_check', {
          type: Sequelize.DataTypes.BOOLEAN
        }, { transaction: t }),
        queryInterface.addColumn('users', 'favoriteColor', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'add_column_check', { transaction: t }),
        queryInterface.removeColumn('users', 'favoriteColor', { transaction: t })
      ]);
    });
  }
};