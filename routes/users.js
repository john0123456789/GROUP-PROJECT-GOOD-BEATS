const express = require('express');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs')




  const loginValidators = [
    check('emailAddress')
    .exists({
      checkFalsy: true
    })
    .withMessage('Please provide a value for Email Address'),
    check('password')
    .exists({
      checkFalsy: true
    })
    .withMessage('Please provide a value for Password'),
  ];

const userValidators = [
  // TODO Define the user validators.
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long')
    .custom((value) => {
      return db.User.findOne({ where: { username: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Username is already in use by another account');
          }
        });
    }),
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 100 })
    .withMessage('Email Address must not be more than 100 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//REGISTER ROUTES
router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();

  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post('/register', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {

    const {
      username,
      emailAddress,
      password,
    } = req.body;

    const user = db.User.build({
      username,
      emailAddress,
    });

    const validatorErrors = validationResult(req);

      if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

  

  //LOGIN ROUTES

  router.get('/login', csrfProtection, (req, res) => {
    res.render('user-login', {
      title: 'Login',
      csrfToken: req.csrfToken(),
    });
  });

  router.post('/login', csrfProtection, loginValidators,
    asyncHandler(async (req, res) => {
      const {
        emailAddress,
        password,
      } = req.body;

      let errors = [];
      const validatorErrors = validationResult(req);

      if (validatorErrors.isEmpty()) {
        // Attempt to get the user by their email address.
        const user = await db.User.findOne({
          where: {
            emailAddress
          }
        });

        if (user !== null) {
          // If the user exists then compare their password
          // to the provided password.
          const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

          if (passwordMatch) {
            // If the password hashes match, then login the user
            // and redirect them to the default route.
            loginUser(req, res, user);
            return res.redirect('/');
          }
        }

        // Otherwise display an error message to the user.
        errors.push('Login failed for the provided email address and password');
      } else {
        errors = validatorErrors.array().map((error) => error.msg);
      }

      res.render('user-login', {
        title: 'Login',
        emailAddress,
        errors,
        csrfToken: req.csrfToken(),
      });
    }));

module.exports = router;
