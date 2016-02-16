var winston = require('winston');

module.exports = getLogger;

function getLogger(module, forcedLevel) {
   var path = module.filename.split('/').slice(-2).join('/');
   return new winston.Logger({
      transports: [

         new winston.transports.Console({
            colorize: true,
            level: process.env == 'development' ? 'debug' : 'info'//,
            // label: path
         })
      ]
   });
}
