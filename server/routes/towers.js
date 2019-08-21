const express = require('express');
const router = express.Router();


// const trips_api = require('../apis/trips_api');
// const authCheck = require("../config/middleware/authCheck");
const tower_api = require('../apis/tower_api');
const authCheck = require("../config/middleware/authCheck");

// router.get('/', authCheck, trips_api.index);
router.get('/', authCheck, tower_api.findAllTowers);

module.exports = router;