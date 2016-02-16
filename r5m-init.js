#! /usr/bin/env node
var shell = require('shelljs');
var dependencies = ['git'];
var path = require('path');
var log = require('./log')(module);
var R5mInit = require('./setup');

var setup = new R5mInit(path.normalize(process.argv[2] || '.'));

log.info("R5M Landing init script");
log.info("1/3. Checking dependencies");
try {
  dependencies.forEach(function(dependency) {
    setup.check(dependency);
    log.debug(dependency + " is installed");
  });
} catch(err) {
  log.error("Error: " + err.message);
  shell.exit(1);
}

log.info("2/3. Creating new project");
setup.initRepo();

log.info("3/3. Installing client library");
setup.initClient();

console.log("\r\n");
log.info("Installation completed successfully.");
log.info("Run `cd " + setup.path +"; gulp` to compile project");
