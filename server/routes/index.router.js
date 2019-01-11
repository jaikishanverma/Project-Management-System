const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlLeavePlaner = require('../controllers//leavePlaner.controller');
const ctrldailyTask = require('../controllers/dailyTask.controller');
const ctrlprojectDetail = require('../controllers/projectDetail.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
// router.get('/logout', ctrlUser.logout);
// router.get('/createLeave',jwtHelper.verifyJwtToken, ctrlLeavePlaner.createLeave);
// router.get('/editLeave', ctrlLeavePlaner.editLeave);
// router.get('/createTask',jwtHelper.verifyJwtToken ,ctrldailyTask.createTask);
// router.get('/getTask',jwtHelper.verifyJwtToken ,ctrldailyTask.getTask);
// router.get('/createProject', ctrlprojectDetail.createProject);
// router.get('/getAllProjects',jwtHelper.verifyJwtToken,ctrlprojectDetail.getAllProjects);

module.exports = router;
