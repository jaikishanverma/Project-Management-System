const mongoose = require('mongoose');
const LeavePlaner = mongoose.model('LeavePlaner');

var leavePlanerServices = {

// ############################################ CREATE ############################################################################

    createLeave: function(userId, email, dateFrom, dateTill,createdBy, actualLeaves, totalLeaves, totalDays, narration) {
        var leave = new LeavePlaner();
        leave.user_id = userId;
        leave.email = email;
        leave.dateFrom = dateFrom;
        leave.dateTill = dateTill;
        leave.createdAt = new Date();
        leave.createdBy = createdBy;
        leave.actualLeaves = actualLeaves;
        leave.totalLeaves = totalLeaves;
        leave.totalDays = totalDays;
        leave.narration = narration;
        return new Promise((resolve, reject) => {
            leave.save((err, doc) => {
                if(err){
                    reject(err);
                }
                else{
                    resolve(doc);
                }
            });
        });
    },

    updateLeave: function(id,email,dateFrom, dateTill,actualLeaves, totalLeaves, totalDays, narration){
        return new Promise((resolve, reject) => {
            LeavePlaner.findByIdAndUpdate(
                id,
                {
                    modifiedAt: new Date(),
                    modifiedBy: email,
                    dateFrom: dateFrom,
                    dateTill: dateTill,
                    actualLeaves: actualLeaves,
                    totalLeaves: totalLeaves,
                    totalDays: totalDays,
                    narration: narration
                },
                { multi: true },
                function(err,doc){
                    if(err){
                            return reject(err);
                    }
                    else{
                        resolve(doc);
                    }
                }
            );
        });

    },

// ################################################ READ ###########################################################################

    findLeaveById: function(id) {
        return new Promise((resolve, reject) => {
            LeavePlaner.findOne({_id: id }, (err, leave) => {
                if(err){
                    reject(err);
                }
                else{
                    resolve(leave);
                }
            })
        })
    },

    findLeaveByUsername: function(username) {
        return new Promise((resolve, reject) => {
            LeavePlaner.find({email: username }, (err, leave) => {
                if(err){
                    reject(err);
                }
                else{
                    resolve(leave);
                }
            })
        })
    },





}
module.exports = leavePlanerServices;
