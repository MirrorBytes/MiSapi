'use strict';
var Promise = require('bluebird');

var core = require('./core/'),
    logger = require('./core/utils/logger');

core({
  port: 3000
}).then(function(server) {
  if(server.constructor !== Error) {
    server.start();
  } else {
    logger.error(server);
  }
});
