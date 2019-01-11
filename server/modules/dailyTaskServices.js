const mongoose = require('mongoose');
const DailyTask = mongoose.model('DailyTask');

var dailyTaskServices = {

// ############################################ CREATE ############################################################################

    createTask: function(id,email,date,timeFrom,timeTill,activity, projectId, projectName,narration,status) {
        var task = new DailyTask();
        task.user_id = id;
        task.email = email;
        task.date = date;
        task.timeFrom = timeFrom;
        task.timeTill = timeTill;
        task.activity = activity;
        task.projectId = projectId;
        task.projectName = projectName;
        task.narration = narration;
        task.status = status;
        task.createdAt = new Date();
        task.createdBy = email;
        return new Promise((resolve, reject) => {
            task.save((err, doc) => {
                if(err){
                    reject(err);
                }
                else{
                    resolve(doc);
                }
            });
        });
    },

    findTaskByEmail: function(email){
        return new Promise((resolve,reject) => {
            DailyTask.find({email: email, isActive: true},(err,user) => {
             //   console.log('inside save' + err);
              if(err){ reject(err)}
              else{
                resolve(user)
              }

            })
          });
    },

    updateTask: function(id,isActive){
      return new Promise((resolve, reject) => {
        DailyTask.findByIdAndUpdate(
          id,
          {isActive: isActive},
          { multi: true },
          function (err, raw) {
          if (err){
             reject(err);
          }
          else{
            // console.log('The raw response from Mongo was ', raw);
            resolve(raw)
          }

      });
      })
    }
}
module.exports = dailyTaskServices;
