const express = require('express');
const router = express.Router();

const tower_api = require('../apis/tower_api');
const authCheck = require("../config/middleware/authCheck");

router.get('/', authCheck, tower_api.findAllTowers);

// router.get('/', tower_api.findAllTowers);

module.exports = router;