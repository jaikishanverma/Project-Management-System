const mongoose = require('mongoose');

var dailyTaskSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId
    },
    email: {
        type: String,
    },
    isActive: {  
      type: Boolean,
      default: true
    },
    timeFrom:{
        type:String
    },
    timeTill:{
        type: String
    },
    activity:{
        type: String
    },
    projectId:{
        type: Number
    },
    projectName:{
      type: String
    },
    narration:{
        type: String
    },
    status: {
        type: String
    },
    createdAt:{
      type: Date
    },
    createdBy:{
      type:String
    },

});

mongoose.model('DailyTask', dailyTaskSchema);
