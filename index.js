'use strict';
var linter = require('semistandard');
var cliEngine = require('standard-cliengine');

// set semistandard --fix
linter.eslintConfig.fix = true;
module.exports.CLIEngine = cliEngine(linter);
