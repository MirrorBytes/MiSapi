'use strict';
var core = require('./core/'),
    logger = require('./core/utils/logger');

core({
  // options go here: port and security
}).then(function(server) {
  if(server.constructor !== Error) {
    server.start();
  } else {
    logger.error(server);
  }
});
