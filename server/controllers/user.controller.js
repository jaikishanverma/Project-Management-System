const passport = require('passport');
const _ = require('lodash');
const userServices = require('../modules/userServices');
const activityServices = require('../modules/activityServices');

module.exports.register = (req, res, next) => {
    var userPromise = userServices.createUser(req.body.fullName, req.body.email, req.body.password);
    userPromise.then(
                    result => res.send(result),
                    err => {
                        if (err.code == 11000)
                                    {
                                    // Store the activity of  'Duplicate email' in activity log
                                        activityServices.createActivity(req.body.email,'Duplicate email addrress found', new Date());
                                        res.status(422).send(['Duplicate email addrress found.']);
                                    }
                            else
                                    {
                                        // Store the activity of  'Other validation errors' in activity log
                                        activityServices.createActivity(req.body.email,err.message, new Date());
                                        return next(err);
                                    }
                    }

                );

}





module.exports.authenticate = (req, res, next) => {

    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err){
            return res.status(400).json(err);
        }
        // registered user
        else if (user) {
            return res.status(200).json({ "token": user.generateJwt() });
        }
        // unknown user or wrong password
        else {
            return res.status(404).json(info);
        }
    })(req, res);
}


module.exports.userProfile = (req, res, next) => {
    var userPromise = userServices.findUserById(req._id);
    userPromise.then(
        user => {
                    if (!user)
                        return res.status(404).json({ status: false, message: 'User record not found.' });
                    else
                        return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
                 },
        err => {}
    );

}



// module.exports.logout = (req, res, next) => {
//     var activity = new Activity();
//     activity.email = req.body.email;
//     activity.activityName = "Logout";
//     activity.activityTime = new Date();
//     activity.save();
//     console.log("Inside Logout function");
// }
