'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Photos', [{
        link: 'https://farm2.staticflickr.com/1607/26043844443_ebe47640d0_o.jpg',
        author: 'John Doe',
        description: 'Lorem Ipsum',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        link: 'http://i.imgur.com/1eBKy6i.jpg',
        author: 'John Doe',
        description: 'Lorem Ipsum',
                createdAt: new Date(),
        updatedAt: new Date()
      }, {
        link: 'http://i.imgur.com/AmWThvw.jpg',
        author: 'John Doe',
        description: 'Lorem Ipsum',
                createdAt: new Date(),
        updatedAt: new Date()

      }, {
        link: 'http://i.imgur.com/9nqsi0r.jpg',
        author: 'John Doe',
        description: 'Lorem Ipsum',
                createdAt: new Date(),
        updatedAt: new Date()

      }, {
        link: 'http://i.imgur.com/5CfVdO6.jpg',
        author: 'John Doe',
        description: 'Lorem Ipsum',
                createdAt: new Date(),
        updatedAt: new Date()

      } ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Photos', null, {});
  }
};
