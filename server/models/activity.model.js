const mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
    email: {
        type: String,
    },
    activityName: {
        type: String,
    },
    activityTime: {
        type: Date,
    }
});

mongoose.model('Activity', activitySchema);