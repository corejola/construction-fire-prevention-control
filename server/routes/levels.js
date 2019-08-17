const express = require('express');
const router  = express.Router();

// const trips_api = require('../apis/trips_api');
// const authCheck = require("../config/middleware/authCheck");

const level_api = require('../apis/level_api');
const authCheck = require("../config/middleware/authCheck");

// router.get('/', authCheck, trips_api.index);
router.get('/', authCheck, level_api.index);


module.exports = router;