// check env.
// ## we can pass the value of NODE_ENV from the cmnd line like 'production' || 'development'
var env = process.env.NODE_ENV || 'development';
// fetch env. config
var config = require('./config.json');
var envConfig = config[env];// value of env is either "production" || 'development to fetch the variables accordingly'
// add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);