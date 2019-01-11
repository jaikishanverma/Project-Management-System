const express = require('express');
const router = express.Router();

const jwtHelper = require('../config/jwtHelper');
const ctrlLeavePlaner = require('../controllers//leavePlaner.controller');

router.post('/createLeave',jwtHelper.verifyJwtToken, ctrlLeavePlaner.createLeave);
router.put('/updateLeave/:id', jwtHelper.verifyJwtToken,ctrlLeavePlaner.updateLeave);
router.get('/getLeave', jwtHelper.verifyJwtToken,ctrlLeavePlaner.getLeave )

module.exports = router;
