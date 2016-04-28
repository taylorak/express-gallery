'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Photos', [{
        link: 'http://payload.cargocollective.com/1/0/128/1388457/01-ottoman-architecture_905.jpg',
        author: 'Ulya Vogt-Göknil',
        description: 'From the 1966 book Living architecture: Ottoman',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },  {
        link: 'http://payload.cargocollective.com/1/0/128/1388457/07-ottoman-architecture_905.jpg',
        author: 'Ulya Vogt-Göknil',
        description: 'From the 1966 book Living architecture: Ottoman',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      }, {
        link: 'http://payload.cargocollective.com/1/0/128/1388457/10-ottoman-architecture_905.jpg',
        author: 'Ulya Vogt-Göknil',
        description: 'From the 1966 book Living architecture: Ottoman',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      }, {
        link: 'http://payload.cargocollective.com/1/0/128/1388457/04-ottoman-architecture_4_905.jpg',
        author: 'Ulya Vogt-Göknil',
        description: 'From the 1966 book Living architecture: Ottoman',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      },{
        link: 'http://payload.cargocollective.com/1/0/128/1388457/08-ottoman-architecture_905.jpg',
        author: 'Ulya Vogt-Göknil',
        description: 'From the 1966 book Living architecture: Ottoman',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      }, {
        link: 'http://payload.cargocollective.com/1/0/128/1388457/03-ottoman-architecture_905.jpg',
        author: 'Ulya Vogt-Göknil',
        description: 'From the 1966 book Living architecture: Ottoman',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      } ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Photos', null, {});
  }
};
