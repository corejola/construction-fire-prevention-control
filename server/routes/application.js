const express = require('express');
const router = express.Router();

const application_api = require('../apis/application_api');
const authCheck = require("../config/middleware/authCheck");

router.get('/', authCheck);

module.exports = router;