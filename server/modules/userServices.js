const mongoose = require('mongoose');
const User = mongoose.model('User');
const activityServices = require('../modules/activityServices');

var userServices = {

    // ################################# CREATE NEW USER IN DATABASE ##############################################################

    createUser: function(fullName, email, password) {
        var user = new User();
        user.fullName = fullName;
        user.email = email;
        user.password = password;
        return new Promise((resolve,reject) => {
            user.save((err,doc) => {
             //   console.log('inside save' + err);
              if(err){ reject(err)}
              else{
                resolve(doc)
              }
              
            })
          });
    },


 

    // ################################# READ THE USER FROM DATABASE BY USING EMAIL ID #############################################

    findUserByUsername: function(username){
        return new Promise((resolve,reject) => {
            User.findOne({email: username},(err,user) => {
             //   console.log('inside save' + err);
              if(err){ reject(err)}
              else{
                resolve(user)
              }
              
            })
          });

    },

    findUserById: function(id){
        return new Promise((resolve,reject) => {
            User.findOne({ _id: id },(err,user) => {
             //   console.log('inside save' + err);
              if(err){ reject(err)}
              else{
                resolve(user)
              }
              
            })
          });

    },






    
    // ################################ UPDATE THE USER DETAILS IN THE DATABASE #####################################################
    updateUser: function(){

    },
    
    // ################################## DELETE THE USER DETAILS FROM DATABASE #####################################################
    deleteUser: function(){

    }
}

module.exports = userServices;