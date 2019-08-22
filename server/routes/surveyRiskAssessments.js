const express = require('express');
const router = express.Router();

// const trips_api = require('../apis/trips_api');
// const authCheck = require("../config/middleware/authCheck");

const assessment_api = require('../apis/assessment_api');
const authCheck = require("../config/middleware/authCheck");

// router.get('/', authCheck, trips_api.index);
router.get('/:id', authCheck, assessment_api.findAllAssessments);
router.get('/', authCheck);

// router.post('/new', authCheck, trips_api.createTrip);
router.post('/new/:id', authCheck, assessment_api.postAssessment);

module.exports = router;