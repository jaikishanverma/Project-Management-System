const mongoose = require('mongoose');
const Activity = mongoose.model('Activity');
var activityServices = {
    // CREATE NEW ACTIVITY IN THE DATABASE
    createActivity: function(email, activityName, activityTime){
        var activity = new Activity();
        activity.email = email;
        activity.activityName = activityName;
        activity.activityTime = activityTime;
        activity.save();
    },
    // READ THE ACTIVITY FROM DATABASE
    readActivity: function(){

    },
    // UPDATE THE ACTIVITY IN DATABASE
    updateActivity: function(){

    },
    // DELETE THE ACTIVITY FROM DATABASE
    deleteActivity: function(){
        
    }
}

module.exports = activityServices;