'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('AlbumLibraries', [
      {
        libraryId: 3,
        albumId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 3,
        albumId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 3,
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 3,
        albumId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 4,
        albumId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 4,
        albumId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 4,
        albumId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 9,
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 9,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 9,
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 9,
        albumId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 10,
        albumId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 10,
        albumId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 10,
        albumId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 10,
        albumId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 5,
        albumId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 5,
        albumId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 5,
        albumId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 6,
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 6,
        albumId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 6,
        albumId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 7,
        albumId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 7,
        albumId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 7,
        albumId: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 8,
        albumId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 8,
        albumId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 8,
        albumId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        libraryId: 1,
        albumId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 1,
        albumId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 1,
        albumId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 1,
        albumId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 2,
        albumId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 2,
        albumId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 2,
        albumId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        libraryId: 2,
        albumId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('AlbumLibraries', null, {});
  }
};
