'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Libraries', [
        {
          name: 'Favorites',
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Favorites',
          userId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: "myfaves",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: "listen to later",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: "Listened To",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),

        }, {
          name: "Want To Listen",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),

        }, {
          name: "Listened To",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),

        }, {
          name: "Want To Listen",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),

        }, {
          name: "BANGERS",
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "KNEE SLAPPERS",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Libraries', null, {});
  }
};
