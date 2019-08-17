const express = require('express');
const router  = express.Router();

const trips_api = require('../apis/trips_api');
const authCheck = require("../config/middleware/authCheck");

router.get('/', authCheck, trips_api.index);

router.post('/new', authCheck, trips_api.createTrip);

module.exports = router;