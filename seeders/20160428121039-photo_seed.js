'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Photos', [{
        link: 'https://c2.staticflickr.com/8/7419/12021006775_c9d3a61449_k.jpg',
        author: 'Gene Wahrlich',
        description: 'Cuernos del Paine, Chile',
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
        link: 'http://i.imgur.com/RkUE6fJ.jpg',
        author: 'Vihiun',
        description: 'North Caskades, Washington, USA',
                createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      } ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Photos', null, {});
  }
};
