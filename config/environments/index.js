/*
* @autor Daniel M. Corrales
* List of environments
* Default: DEVELOPMENT
*/

require("dotenv").config();

const PRODUCTION = require("./environment.development");
const DEVELOPMENT = require("./environment.development");
const { NODE_ENV } = process.env;

let currentEnvironment = DEVELOPMENT;

if(NODE_ENV === "PRODUCTION")
    currentEnvironment = PRODUCTION;

module.exports = currentEnvironment;