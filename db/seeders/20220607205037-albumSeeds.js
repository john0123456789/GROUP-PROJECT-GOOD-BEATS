'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [{
      title:
      trackLists:
      genre:
      artist:
      releaseDate:
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
