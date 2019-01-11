const dailyTaskServices = require('../modules/dailyTaskServices');
const {check,body} = require('express-validator/check')

module.exports.validate = (method) => {
  switch(method){
    case 'createTask': {
      return[
        body('date', 'date field can\'t be empty').exists(),
        body('timeFrom', 'timeFrom field can\'t be empty').exists(),
        body('timeTill', 'timeTill field can\'t be empty').exists(),
        body('activity', 'activity field can\'t be empty').exists(),
        body('projectId').isInt(),
        body('projectName', 'projectName field can\'t be empty').exists(),
        body('narration', 'narration field can\'t be empty').exists(),
        body('status', 'status field is empty or invalid value').notEmpty().isIn(['pending', 'completed'])

      ]
    }

  }
}

const validationHandler = next => result => {
  if (result.isEmpty()) return
  if (!next)
    throw new Error(
      result.array().map(i => `'${i.param}' has ${i.msg}`).join(' ')
    )
else
  return next(
    new Error(
     result.array().map(i => `'${i.param}' has ${i.msg}`).join('')
    )
  )
}

exports.createTask = (req, res, next) => {
   req
   .getValidationResult() // to get the result of above validate fn
   .then(validationHandler())
   .then(() => {
      const { date, timeFrom, timeTill, activity, projectId, projectName, narration, status } = req.body
      var createTaskPromise = dailyTaskServices.createTask(req._id,req.email, date,timeFrom, timeTill, activity, projectId, projectName, narration, status);
      createTaskPromise.then(
          result => res.send(result),
          err =>{ return next(err)}
      );

   })
   .catch(next)
}



/*
module.exports.createTask = (req, res, next) => {
    var createTaskPromise = dailyTaskServices.createTask(req._id,req.email, req.body.date,req.body.timeFrom, req.body.timeTill, req.body.activity, req.body.projectId, req.body.projectName, req.body.narration, req.body.status);
    createTaskPromise.then(
        result => res.send(result),
        err => {return next(err)}

    );
}
*/
module.exports.getTask = (req, res, next) => {
  var findTaskPromise = dailyTaskServices.findTaskByEmail(req.email);
  findTaskPromise.then(
    result => res.send(result),
    err => {return next(err)}
  );
}

module.exports.updateTask = (req, res, next) => {
  var updateTaskPromise = dailyTaskServices.updateTask(req.params.id, req.body.isActive);
  updateTaskPromise.then(
    result => res.status(200).json({"success": "Test updated successfully"}),
    err => {return next(err)}
  )
}
