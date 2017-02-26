'use strict';
var bodyParser = require('body-parser'),
    compression = require('compression'),
    helmet = require('helmet'),
    morgan = require('morgan');

var logger = require('./logger'),
    defaults = require('./defaults');

module.exports = function(app, options) {
  logger.debug('Setting port to ' + (process.env.PORT || options.port || defaults.port) + '.');
  app.set('port', process.env.PORT || options.port || defaults.port);
  logger.debug('Enabling helmet');
  app.use(helmet(options.security || defaults.security));

  logger.debug('Enabling body parser w/ parse urlencoded request bodies');
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json({
    type: [ 'json', 'application/csp-report' ]
  }));
  logger.debug('Enabling GZip Compression');
	app.use(compression());

  app.use(morgan('combined', {
    'stream': logger.stream
  }));
};
