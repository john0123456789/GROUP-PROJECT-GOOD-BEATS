'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Hannah Montana',
        emailAddress: 'demo@netscape.com',
        hashedPassword: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        username: "Bobby Boobus",
        emailAddress: "BobbyBobus@bob.com",
        hashedPassword: "doesntmatter",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: "Pocky Pocus",
        emailAddress: "PocusPock@pocker.pocus",
        hashedPassword: "popo",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'jimboN',
        emailAddress: 'jimbo@gmail.com',
        hashedPassword: 'neutron13',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        username: 'heisenberg',
        emailAddress: 'heisenberg@yahoo.com',
        hashedPassword: 'Felina22',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        username: "Giff Jranof",
        emailAddress: "myNameJiff@starwars.com",
        hashedPassword: "Jiff",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: "Ron Burgundy",
        emailAddress: "morninsandiego@news.com",
        hashedPassword: "moustache",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Bugs Bunny',
        emailAddress: 'duckseason@acme.net',
        hashedPassword: 'whatsupdoc',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        username: 'Daffy Duck',
        emailAddress: 'rabbitseason@acme.net',
        hashedPassword: 'dispicable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
