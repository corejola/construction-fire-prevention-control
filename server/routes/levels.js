const express = require('express');
const router = express.Router();

const level_api = require('../apis/level_api');
const authCheck = require("../config/middleware/authCheck");

// router.get('/:id', authCheck, level_api.findAllLevels);
router.get('/:id', level_api.findAllLevels);

module.exports = router;