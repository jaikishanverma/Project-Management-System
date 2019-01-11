require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressValidator = require('express-validator')

const rtsIndex = require('./routes/index.router');
const rtsLeave = require('./routes/leave.router');
const rtsProject = require('./routes/project.router');
const rtsTask = require('./routes/task.router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());
app.use((req, res, next) => { //############################ Next method is used to execute the next middleware in line, if present else request will not go there
    res.header('Access-Control-Allow-Headers','*'),//Allow access to all
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-with, Content-Type, Accept, Authorization'//These heders should also append with incoming request
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');// To alllow access to only those HTTP request which you want
        return res.status(200).json({});
    }
    next();
});
app.use(passport.initialize());


app.use('/api', rtsIndex);
app.use('/api/leave', rtsLeave);
app.use('/api/project', rtsProject);
app.use('/api/task', rtsTask);


// Requests reachinng to the below app.use function didn't find their routes, so Handle those requests
app.use((req, res, next) => {
    const error = new Error('Route Not found for the given address');// Error object is provided by node.js
    error.status = 404;
    next(error);
})

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
        res.status(err.status || 500);
        res.json({
        error: {
            message: err.message
        }
      });
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
