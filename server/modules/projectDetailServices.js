const mongoose = require('mongoose');
const ProjectDetail = mongoose.model('ProjectDetail');

var projectDetailServices = {
// ############################################ CREATE ############################################################################

    createProject: function(projectId, projectName) {
        var project = new ProjectDetail();
        project.projectId = projectId;
        project.projectName = projectName;
        return new Promise((resolve, reject) => {
            project.save((err, doc) => {
                if(err){
                    reject(err);
                }
                else{
                    resolve(doc);
                }
            });
        });
    },
    getAllProjects: function(){
    return new Promise((resolve,reject) => {
        ProjectDetail.find({}).
        select('projectName projectId').
        exec(function(err, result){
            if(err){ reject(err)}
          else{
            resolve(result)
          }
        })
      });
}
}
module.exports = projectDetailServices;
