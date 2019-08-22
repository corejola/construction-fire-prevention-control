const express = require('express');
const router = express.Router();
const passport = require('../config/passport.js');

const users_api = require('../apis/users_api');

const authCheck = require('../config/middleware/authCheck')

router.get('/logout', users_api.signOutUser);

router.post('/login', passport.authenticate("local"), users_api.loginUser);

router.get('/getUser', authCheck, users_api.getUser);

router.post('/signup', users_api.signUpUser);

module.exports = router;