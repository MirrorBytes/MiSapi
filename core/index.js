'use strict';
var Promise = require('bluebird'),
    express = require('express'),
    path = require('path'),
    app = express();

var configure = require('./utils/configuration'),
    routing = require('./routes/'),
    server = require('./build');

module.exports = function(options) {
  return new Promise(function(resolve, reject) {
    try {
      configure(app, options);
      routing(app);
    } catch(e) {
      reject(e);
    } finally {
      resolve(new server(app));
    }
  });
}
