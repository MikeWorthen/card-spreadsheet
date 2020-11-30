const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/welcome', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/home', ensureAuthenticated, (req, res) =>
  res.render('authIndex', {
    user: req.user
  })
);

router.get('/cardSearch', ensureAuthenticated, (req, res) =>
  res.render('cardSearch', {
    user: req.user
  })
);

module.exports = router;