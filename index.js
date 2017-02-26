'use strict';
var path = require('path');

var core = require('./core/'),
    logger = require('./core/utils/logger');

core({
  // options go here: port and security
  routes: path.resolve(__dirname, 'routes/')
}).then(function(server) {
  if(server.constructor !== Error) {
    server.start();
  } else {
    logger.error(server);
  }
});
