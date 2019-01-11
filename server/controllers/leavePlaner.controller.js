const leavePlanerServices = require('../modules/leavePlaner.services');

module.exports.createLeave = (req, res, next) => {
    var createLeavePromise = leavePlanerServices.createLeave(req._id, req.email, req.body.dateFrom, req.body.dateTill,req.body.createdBy,req.body.actualLeaves, req.body.totalLeaves, req.body.totalDays, req.body.narration);
    createLeavePromise.then(
        result => res.send(result),
        err => {return next(err)}

    );
};

module.exports.updateLeave = (req, res, next) => {
    var updateLeavePromise = leavePlanerServices.updateLeave(req.params.id,req.email,req.body.dateFrom,req.body.dateTill,req.body.actualLeaves, req.body.totalLeaves, req.body.totalDays, req.body.narration);
    updateLeavePromise.then(
        result => res.status(200).json({"success": "Test updated successfully"}),
        err => {return next(err)}
    )
};

module.exports.getLeave = (req, res, next) => {
  var getLeavePromise = leavePlanerServices.findLeaveByUsername(req.email);
  getLeavePromise.then(
    result => res.send(result),
    err => {return next(err)}
  )
}
