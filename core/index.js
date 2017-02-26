'use strict';
var Promise = require('bluebird'),
    express = require('express'),
    path = require('path'),
    app = express();

var configure = require('./utils/configuration'),
    logger = require('./utils/logger'),
    routing = require('./routes/'),
    server = require('./build');

module.exports = function(options) {
  return new Promise(function(resolve, reject) {
    try {
      configure(app, options);

      app.post(require('./utils/defaults')['security']['contentSecurityPolicy']['directives'].reportUri, function(req, res) {
        if(req.body) {
          logger.error('CSP Violation: ', req.body);
        } else {
          logger.error('CSP Violation: No data received!');
        }

        res.status(204).end();
      });

      routing(app);
    } catch(e) {
      reject(e);
    } finally {
      resolve(new server(app));
    }
  });
}
