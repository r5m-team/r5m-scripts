var shell = require('shelljs');

function R5mInit(path) {
  this.path = path;
}

R5mInit.prototype.check = function(programName) {
  if (!shell.which(programName)) {
    throw new Error(programName + ' is required to run this script');
  }
}

R5mInit.prototype.initRepo = function() {
  shell.exec('git clone https://github.com/r5m-team/r5m-landing.git ' + this.path);
  shell.exec('cd ' + this.path + '; npm i');
  shell.exec('cd ' + this.path + '; rm -rf .git; git init');
}

R5mInit.prototype.initClient = function() {
  shell.exec('cd ' + this.path + '; gulp install');
}

module.exports = R5mInit;
