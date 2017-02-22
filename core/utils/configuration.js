'use strict';
var bodyParser = require('body-parser'),
    compression = require('compression'),
    helmet = require('helmet'),
    morgan = require('morgan');

var logger = require('./logger');

module.exports = function(app, options) {
  logger.debug('Setting port to ' + (process.env.PORT || options.port) + '.');
  app.set('port', process.env.PORT || options.port);
  logger.debug("Enabling body parser w/ parse urlencoded request bodies");
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
  logger.debug("Enabling GZip Compression");
	app.use(compression());
  logger.debug('Enabling helmet');
  app.use(helmet());

  app.use(morgan('combined', {
    'stream': logger.stream
  }));
};
