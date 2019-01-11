const projectDetailServices = require('../modules/projectDetailServices');

module.exports.createProject = (req, res, next) => {
    var projectDetailPromise = projectDetailServices.createProject(req.body.projectId, req.body.projectName);
    projectDetailPromise.then(
        result => res.send(result),
        err => {return next(err)}
    );
};

module.exports.getAllProjects = (req, res, next) => {
  var getAllProjectsPromise = projectDetailServices.getAllProjects();
  getAllProjectsPromise.then(
    result => res.send(result),
    err => {return next(err)}
  );
}
