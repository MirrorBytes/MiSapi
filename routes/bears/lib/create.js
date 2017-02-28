'use strict';
var Bear = require('../../../models/bear'),
    logger = require('../../../core/utils/logger');

module.exports = function(req, res) {
  var newBear = new Bear();

  newBear.name = req.body['name'];

  newBear.save()
    .then(function(bear) {
      res.json(bear);
    })
    .catch(function(err) {
      logger.error(err);
      res.status(404).end();
    });
};
