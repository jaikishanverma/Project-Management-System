const mongoose = require('mongoose');

var projectsDetailSchema = new mongoose.Schema({
    projectId: {
        type: Number
    },
    projectName: {
        type: String
    }
    
});

mongoose.model('ProjectDetail', projectsDetailSchema);