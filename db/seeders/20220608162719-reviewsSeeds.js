'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [{
     title: "AMAZING",
     content: "I love this album so much, great for parties!",
     rating: 5,
     userId: 5,
     albumId: 25,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "not that great, very disappointed",
     content: "I was expecting a lot more from Kendrick. Album is overhyped!!! 1/5",
     rating: 1,
     userId: 4,
     albumId: 26,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "In my feels",
     content: "Great album, I love SCREAMING the lyrics with my girls. Olivia is amazing",
     rating: 5,
     userId: 3,
     albumId: 27,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "GREATEST ALBUM OF ALL TIME",
     content: "A classic. Everyone needs to listen to Abbey Road.",
     rating: 5,
     userId: 7,
     albumId: 28,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "JUSTIN BEIBER <3!!!!",
     content: "BABY BABY BABY OHHHHH!!",
     rating: 5,
     userId: 6,
     albumId: 29,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "Boring",
     content: "The songs all sound the same. Don't waste your time!",
     rating: 2,
     userId: 9,
     albumId: 30,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "Not that bad",
     content: "Album was ok, not one of my favorites but not bad either",
     rating: 3,
     userId: 3,
     albumId: 31,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "great album for the gym",
     content: "Love blasting this album when i'm at the gym, definitely recommend it. Hit my PR to this album",
     rating: 4,
     userId: 4,
     albumId: 32,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "I HATE IT",
     content: "that I love it so much!!!",
     rating: 4,
     userId: 4,
     albumId: 9,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "I lOVE IT",
     content: "so much that I hate it so much!!!",
     rating: 1,
     userId: 6,
     albumId: 10,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "Wow this artist is artistic",
     content: "i wish this artist would paint on me",
     rating: 5,
     userId: 3,
     albumId: 11,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "Dang, this album got me pregnant",
     content: "Gonna name him/her after this album",
     rating: 5,
     userId: 2,
     albumId: 12,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "My kid got amputated to this album",
     content: "Its going to scar him for life, so it sucks, but I used to like this so I'll give it 2 stars ",
     rating: 2,
     userId: 4,
     albumId: 13,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "If I could have 1 dollar for every time I listened to this album",
     content: "I would like a refund",
     rating: 1,
     userId: 7,
     albumId: 14,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "MID",
     content: "literally half of the albums are better, and half are worse... mid as heck",
     rating: 3,
     userId: 2,
     albumId: 15,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "I wish I could unhear it",
     content: "so that i could listen to it again for the first time",
     rating: 5,
     userId: 3,
     albumId: 16,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: "WOW MUST LISTEN!!!",
     content: "The Strokes have done it again!! The Adults Are Talking is on repeat :)",
     rating: 5,
     userId: 6,
     albumId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: "hauntingly beautiful",
     content: "This album has invoked so so so many emotions I never knew I even had",
     rating: 5,
     userId: 7,
     albumId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: "yeehaw cowboy!",
     content: "mysterious masked country singer orville peck has done it yet again, amazing album...DAYTONA SAND BABY!",
     rating: 5,
     userId: 8,
     albumId: 3,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: "what kind of music is this???",
     content: "I have no idea what I just listened to...taking a tylenol for my headache now",
     rating: 1,
     userId: 2,
     albumId: 4,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: "I wish my dad took me to parades",
     content: "welcome to the black parade always hits me in the feels...MY CHEMICAL ROMANCE FTW!",
     rating: 5,
     userId: 9,
     albumId: 5,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: "classical music is so pretentious",
     content: "Paganini is a beast in his own right but whoever listens to this for fun is out of their mind",
     rating: 3,
     userId: 4,
     albumId: 6,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: "tyler never ceases to amaze me",
     content: "I wish he kept the original album name of scum f**k flower boy but oh well, this album is a banger",
     rating: 4,
     userId: 7,
     albumId: 7,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: "definition of chill",
     content: "LOVE LOVE LOVE THE XX, BEST MUSIC FOR MAXIN RELAXIN!",
     rating: 4,
     userId: 5,
     albumId: 8,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     title: 'This album is AH-MAZE-ING',
     content: 'Andrew Bird is so talented. Make sure to checkout Measuring Cups!',
     rating: 5,
     userId: 7,
     albumId: 17,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: 'This is my favorite Album',
     content: 'Jeff Buckley is my favorite artist of all time. Unlike the Rabbit!',
     rating: 5,
     userId: 9,
     albumId: 18,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: 'Decent but not his best work',
     content: "I enjoy Usher, and this album is good but he's done better.",
     rating: 4,
     userId: 8,
     albumId: 19,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: 'Funk soul brotha',
     content: 'This album is banger after banger!  10/10 would recommend!',
     rating: 5,
     userId: 2,
     albumId: 20,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: 'Is this that one guy?',
     content: 'I dig it. Is this that guy from the Over the Hedge soundtrack?',
     rating: 4,
     userId: 9,
     albumId: 21,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: 'This makes me sad',
     content: 'I like the music, but the lyrics make me kinda sad.',
     rating: 3,
     userId: 6,
     albumId: 22,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: 'Who is Bob Dylan?',
     content: 'and where am I?',
     rating: 2,
     userId: 3,
     albumId: 23,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     title: "I don't know who this is",
     content: "But I kind like it. I'll have to check out more of their stuff",
     rating: 5,
     userId: 8,
     albumId: 24,
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
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
