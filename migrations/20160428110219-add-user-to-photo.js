'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Photos', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Photos', 'user_id');
  }
};
