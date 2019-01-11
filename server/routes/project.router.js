const express = require('express');
const router = express.Router();

const jwtHelper = require('../config/jwtHelper');
const ctrlprojectDetail = require('../controllers/projectDetail.controller');

router.post('/createProject', ctrlprojectDetail.createProject);
router.get('/getAllProjects',jwtHelper.verifyJwtToken,ctrlprojectDetail.getAllProjects);

module.exports = router;
