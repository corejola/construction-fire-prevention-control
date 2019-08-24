const express = require('express');
const router = express.Router();

const assessment_api = require('../apis/assessment_api');
const authCheck = require("../config/middleware/authCheck");

router.get('/:id', authCheck, assessment_api.findAllAssessments);

router.get('/', authCheck);

router.post('/new/:id', authCheck, assessment_api.postAssessment);

module.exports = router;