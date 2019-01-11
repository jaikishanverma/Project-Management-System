const express = require('express');
const router = express.Router();

const jwtHelper = require('../config/jwtHelper');
const ctrldailyTask = require('../controllers/dailyTask.controller');

router.post('/createTask',jwtHelper.verifyJwtToken ,ctrldailyTask.validate('createTask'),ctrldailyTask.createTask);
router.get('/getTask',jwtHelper.verifyJwtToken ,ctrldailyTask.getTask);
router.put('/updateTask/:id',jwtHelper.verifyJwtToken ,ctrldailyTask.updateTask);

module.exports = router;
