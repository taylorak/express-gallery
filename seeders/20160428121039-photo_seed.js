'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Photos', [{
        link: 'https://farm1.staticflickr.com/691/20664938416_4e4b224684_h.jpg',
        author: 'IamIrene',
        description: 'Grand Canyon After the Rain',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },  {
        link: 'http://i.imgur.com/0fR0RmH.jpg',
        author: 'Sundancekid801',
        description: 'Skogafoss, Iceland',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      }, {
        link: 'http://i.imgur.com/sATBfbP.jpg',
        author: 'Brocheure',
        description: 'Washington State, USA',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      }, {
        link: 'https://c1.staticflickr.com/1/757/22792566551_ff23233525_o.jpg',
        author: 'DaHitcha',
        description: 'The Towers, Greenland',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      },{
        link: 'http://i.imgur.com/UaQJaKH.jpg',
        author: 'Maplewhat',
        description: 'Fjadrargljur, Iceland',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      }, {
        link: 'http://i.imgur.com/WApVpO1.jpg',
        author: 'N/A',
        description: 'Reynisfjara, Søren',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1

      },{
        link: 'http://imgur.com/fbVEMLV',
        author: 'Mark L.',
        description: 'North Sister, Oregon, USA',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      } ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Photos', null, {});
  }
};
