"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Albums",[
      {
        title: "The New Abnormal",
        trackLists: "The Adults Are Talking,Selfless,Brooklyn Bridge To Chorus,Bad Decision,Eternal Summer,At The Door,Why Are Sundays So Depressing,Not The Same Anymore,Ode To The Mets",
        genre: "Alternative",
        artist: "The Strokes",
        releaseDate: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Laurel Hell",
        trackLists: "Valentine Texas,Working For The Knife,Stay Soft,Everyone,Heat Lightning,The Only Heartbreaker,Love Me More,There's Nothing Left For You,Should've Been Me,I Guess,That's Our Lamp",
        genre: "Indie",
        artist: "Mitski",
        releaseDate: 2022,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bronco",
        trackLists: "Daytona Sand,The Curse Of The Blackened Eye,Outta Time,Lafayette,C'mon Baby Cry,Iris Rose,Kalahari Down,Bronco,Trample Out The Days,Blush,Hexie Mountains,Let Me Drown,Any Turn,City Of Gold,All I Can Say",
        genre: "Country",
        artist: "Orville Peck",
        releaseDate: 2022,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Nurture",
        trackLists: "Lifelike,Look At The Sky,Get Your Wish,Wind Tempos,Musician,DO-RE-MI-FA-SO-LA-TI-DO,Mother,Dullscythe,Sweet Time,Mirror,Something Comforting,Blossom,Unfold,Trying To Feel Alive",
        genre: "Electronic",
        artist: "Porter Robinson",
        releaseDate: 2021,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Black Parade",
        trackLists: "The End.,Dead!,This Is How I Disappear,The Sharpest Lives,Welcome To The Black Parade,I Don't Love You,House Of Wolves,Cancer,Mama,Sleep,Teenagers,Disenchanted,Famous Last Words,Blood",
        genre: "Rock",
        artist: "My Chemical Romance",
        releaseDate: 2006,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "24 Caprices",
        trackLists: "No.1 In E Major,No.2 In B Minor,No.3 In E Minor,No.4 In C Minor,No.5 In A Minor,No.6 In G Minor,No.7 In A Minor,No.8 In E-Flat Major,No.9 In E Major,No.10 In G Minor,No.11 In C Major,No.12 In A-Flat Major,No.13 In B-Flat Major,No.14 In E-Flat Major,No.15 In E Minor,No.16 In G Minor,No.17 In E-Flat Major,No.18 In C Major,No.19 In E-Flat Major,No.20 In D Major,No.21 In A Major,No.22 In F Major,No.23 In E-Flat Major,No.24 In A Minor",
        genre: "Classical",
        artist: "Niccolo Paganini",
        releaseDate: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Flower Boy",
        trackLists: "Foreword,Where This Flower Blooms,Sometimes...,See You Again,Who Dat Boy,Pothole,Garden Shed,Boredom,I Ain't Got Time!,911 Mr.Lonely,Droppin' Seeds,November,Glitter,Enjoy Right Now Today",
        genre: "Rap",
        artist: "Tyler, The Creator",
        releaseDate: 2017,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "xx",
        trackLists: "Intro,VCR,Crystalised,Islands,Heart Skipped A Beat,Fantasy,Shelter,Basic Space,Infinity,Night Time,Stars",
        genre: "R&B",
        artist: "The xx",
        releaseDate: 2009,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Scenery",
        trackLists: "It Could Happen to You,I want to Talk About You,Early Summer,Willow Weep for Me,Autumn Leaves,Scenery",
        genre: "Jazz",
        artist: "Ryo Fukui",
        releaseDate: 1976,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Weezer",
        trackLists: "My Name Is Jonas,No One Else,The World Has Turned and Left Me Here,Buddy Holly,Undone-The Sweater Song,Surf Wax America,Say It Ain't So,In the Garage,Holiday,Only in Dreams",
        genre: "Rock",
        artist: "Weezer",
        releaseDate: 1994,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "London Calling",
        trackLists: "Hateful,Rudie Can't Fall,Paul's Tune,I'm not Down,4 Horsemen,Koka Kola Advertising & Cocaine,Death Or Glory,Lover's Rock,Lonesome Me,The Police Walked In 4 Jazz,Lost in the Supermarket,Up-Toon,Walking The Sidewalk,Where You Gonna Go,The Man In Me,Remote Control,Working and Waiting,Heart & Mind,Brand New Cadillac,London Calling,Revolution Rock",
        genre: "Rock",
        artist: "The Clash",
        releaseDate: 1979,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Daniel Caesar",
        trackLists: "Get You,Best Part,Hold Me Down,Neu Roses,Loose,We Find Love,Blessed,Take Me Away,Transform,Freudian",
        genre: "R&B",
        artist: "Kali Uchis",
        releaseDate: 2017,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Channel Orange",
        trackLists: "Start,Thinkin Bout You,Fertilizer,Sierra Leone,Sweet Life,Not Just Money,Super Rich Kids,Pilot Jones,Crack Rock,Pyramids,Lost,White,Monks,Bad Religion,Pink Matter,Forrest Gump,End",
        genre: "R&B",
        artist: "Frank Ocean",
        releaseDate: 2012,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Supernatural",
        trackLists: "(Da Le) Yaleo,Love of My Life,Put Your Lights On,Africa Bamba,Smooth,Do You Like the Way,Maria Maria,Migra,Corazon Espinado,Wishing It Was,El Farol,Primavera,The Calling",
        genre: "Rock",
        artist: "Santana",
        releaseDate: 1999,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Dangerous: The Double Album",
        trackLists: "Sand in My Boots,Wasted on You,Somebody's Problem,More Surprised than Me,865,Warning,Neon Eyes,Outlaw,Whiskey'd My Way,Wonderin' bout the Wind,Your Bartender,Only Thing That's Gone,Cover Me Up,7 Summers,More Than My Hometown",
        genre: "Country",
        artist: "Morgan Wallen",
        releaseDate: 2021,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Millenium",
        trackLists: "Larger Than Life,I Want it That Way,Show Me the Meaning of Being Lonely,It's Gotta Be You,I Need You Tonight,Don't Want You Back,Don't Wanna Lose You Now,The One,Back to Your Heart,Spanish Eyes,No One Else Comes Close,The Perfect Fan",
        genre: "Pop",
        artist: "Backstreet Boys",
        releaseDate: 1999,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Mysterious Production of Eggs',
        trackLists: '/=/,Sovay,A Nervous Tic Motion of the Head to the Left,Fake Palindromes,Measuring Cups,Banking on a Myth,Masterfade,Opposite Day,Skin Is My,The Naming of Things,MX Missles,/=/=/,Tables and Chairs,The Happy Birthday Song',
        genre: 'Alternative',
        artist: 'Andrew Bird',
        releaseDate: 2005,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Grace',
        trackLists: "Mojo Pin,Grace,Last Goodbye,Lilac Wine,So Real,Hallelujah,Lover You Should've Come Over,Corpus Christi Carol,Eternal Life,Dream Brother,Forget Her",
        genre: 'Alternative',
        artist: 'Jeff Buckley',
        releaseDate: 1994,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My Way',
        trackLists: "You Make Me Wanna...,Just Like Me,Nice & Slow,Slow Jam,My Way,Come Back,I Will,Bedtime,One Day You'll Be Mine,You Make Me Wanna...(Extended Version)",
        genre: 'R&B',
        artist: 'Usher',
        releaseDate: 1997,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "You've Come A Long Way Baby",
        trackLists: "Right Here Right Now,The Rockafeller Skank,In Heaven,Gangster Trippin,Build It Up Tear It Down,Kalifornia,Soul Surfing,You're Not From Brighton,Praise You,Love Island,Acid 8000",
        genre: 'Electronic',
        artist: 'Fatboy Slim',
        releaseDate: 1998,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Rockin' The Suburbs",
        trackLists: "Annie Waits,Zak and Sara,Still Fighting It,Gone,Fred Jones Pt.2,The Ascent of Stan,Losing Lisa,Carrying Cathy,Not the Same, Rockin' the Suburbs,Fired,The Luckiest",
        genre: 'Indie',
        artist: 'Ben Folds',
        releaseDate: 2001,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Queen Is Dead',
        trackLists: "The Queen Is Dead,Frankly Mr. Shankly,I Know It's Over,Never Had No One Ever,Cemetry Gates,Bigmouth Strikes Again,The Boy with the Thorn in His Side,Vicar in a Tutu,There Is a Light That Never Goes Out,Some Girls Are Bigger Than Others",
        genre: 'Alternative',
        artist: 'The Smiths',
        releaseDate: 1986,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Freewheelin' Bob Dylan",
        trackLists: "Blowin' in the Wind,Girl from the North Country,Masters of War,Down the Highway,Bob Dylan's Blues,A Hard Rain's A-Gonna Fall,Don't Think Twice It's All Right,Bob Dylan's Dream,Oxford Town,Talkin' World War III Blues,Corrina Corrina,Honey Just Allow Me One More Chance,I Shall Be Free",
        genre: 'Folk',
        artist: 'Bob Dylan',
        releaseDate: 1963,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Electric Mile',
        trackLists: "Unified,Praise Up,Night of the Living Dead,Parasite,Hopeless Case,Free At Last,Shy Girl,Rain Jam,Electric Mile,Sara's Song,100 Magic Rings,Poison,Free at last(Reprise)",
        genre: 'Hip Hop',
        artist: 'G. Love & Special Sauce',
        releaseDate: 2001,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "YHLQMDLG",
        trackLists: "Si Veo a Tu MamáSi Veo a Tu Mamá,La Difícil,Pero Ya No,La Santa by Bad Bunny & Daddy Yankee,Yo Perreo Sola,Bichiyal by Bad Bunny & Yaviah,Soliá,La Zona,Qué Malo by Bad Bunny & Ñengo Flow,Vete,Ignorantes by Bad Bunny & Sech,A Tu Merced,Una Vez by Bad Bunny & Mora,Safaera by Bad Bunny Jowell & Randy & Ñengo Flow,25/8,Está Cabrón Ser Yo by Bad Bunny & Anuel AA,Puesto Pa' Guerrial by Bad Bunny & Myke Towers,P FKN R by Bad Bunny Kendo Kaponi & Arcángel,Hablamos Mañana by Bad Bunny Duki & Pablo Chill - E,﹤3",
        genre: "Reggaeton",
        artist: "Bad Bunny",
        releaseDate: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Mr. Morale & The Big Steppers",
        trackLists: "1. United In Grief,N95,Worldwide Steppers,Die Hard,Father Time,Rich(Interlude),Rich Spirit,We Cry Together,Purple Hearts,Count Me Out,Crown,Silent Hill,Savior(Interlude),Savior,Auntie Diaries,Prayer,Mother I Sober,Mirror ",
        genre: "R&B",
        artist: "Kendrick Lamar",
        releaseDate: 2022,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Sour",
        trackLists: "1. brutal,traitor,drivers license,1 step forward 3 steps back,deja vu,good 4 u,enough for you,happier,jealousy jealousy,favorite crime,hope ur ok",
        genre: "Pop",
        artist: "Olivia Rodrigo",
        releaseDate: 2021,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Abbey Road",
        trackLists: "Come Together,Something,Maxwell's Silver Hammer,Oh! Darling,Octopus's Garden,I Want You (She's So Heavy),Here Comes the Sun,Because,You Never Gave Me Your Money,Sun King,Mean Mr. Mustard,Polythene Pam,She Cam in Through the Bathroom Window,Golden Slumbers,Carry That Weight,The End,Her Majesty",
        genre: "Rock",
        artist: "Beatles",
        releaseDate: 1969,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "My World 2.0",
        trackLists: "Baby (feat. Ludacris),Somebody to Love,Stuck In the Moment,U Smile,Runaway Love,Never Let You Go,Overboard (feat. Jessica Jarell),Eenie Meenie (with Sean Kingston),Up,That Should Be Me,Kiss and Tell (Bonus Track)",
        genre: "Pop",
        artist: "Justin Bieber",
        releaseDate: 2010,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Exodus",
        trackLists: "Natural Mystic,So Much Things To SyntaxError, Guiltiness,The Heathen,Exodus,Jamming,Waiting In Vain,Turn Your Lights Down Low,Three Little BirdsOne Love / People Get Ready",
        genre: "Reggae",
        artist: "Mob Marley",
        releaseDate: 1997,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Ramones",
        trackLists: "Blitzkrieg Bop,Beat on the Brat,Judy Is a Punk,I wanna Be Your Boyfriend,Chain Saw,Now I Wanna Sniff Some Glue,I Don't Wanna Go Down to the Basement,Loudmouth,Havana Affair,Listen to My Heart,53rd & 3rd,Let's Dance,I Don't Wanna Walk Around with You,Today Your Love Tomorrow the World",
        genre: "Punk Rock",
        artist: "Ramones",
        releaseDate: 1976,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Toxicity",
        trackLists: "Prison Song,Jet Pilot,Bounce,Needles,X,Forest,Deer Dance,Chop Suey!,ATWA",
        genre: "Heavy Metal",
        artist: "System of a Down",
        releaseDate: 2001,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Albums", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },
};
