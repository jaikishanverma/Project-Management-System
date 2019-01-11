const mongoose = require('mongoose');

var leavePlanerSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId
    },
    email: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    createdBy: {
        type: String,
    },
    modifiedAt:{
        type: Date
    },
    modifiedBy:{
        type: String
    },
    dateFrom: {
        type: Date
    },
    dateTill: {
        type: Date
    },
    actualLeaves: {
        type: Number
    },
    totalLeaves:{
        type: Number
    },
    totalDays:{
        type: Number
    },
    narration:{
        type: String
    }
});

mongoose.model('LeavePlaner', leavePlanerSchema);
