const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userServices = require('../modules/userServices');
const activityServices = require('../modules/activityServices');
passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
           var userPromise = userServices.findUserByUsername(username);
           userPromise.then(user => {
                    if (!user)
                       { 
                        //    store the activity and return
                           activityServices.createActivity(username,'Email is not registered', new Date());
                           return done(null, false, { message: 'Email is not registered' });
                        }
                    // wrong password
                    else if (!user.verifyPassword(password))
                        {
                        //    store the activity and return
                            activityServices.createActivity(username,'Wrong password', new Date());
                            return done(null, false, { message: 'Wrong password.' });
                        }
                    // authentication succeeded
                    else
                       {
                        //    store the activity and return
                            activityServices.createActivity(username,'Successful login', new Date());
                            return done(null, user);
                        }

           },
           err => {
                if(err){
                    return done(err);
                }
           });
        })
);