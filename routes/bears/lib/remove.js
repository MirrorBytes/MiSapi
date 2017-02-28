'use strict';
var Bear = require('../../../models/bear'),
    logger = require('../../../core/utils/logger');

module.exports = function(req, res) {
  Bear.findOneAndRemove({
    _id: req.params['bears']
  })
    .exec()
    .then(function(bear) {
      res.status(204).send(bear);
    })
    .catch(function(err) {
      logger.error(err);
      res.status(404).end();
    });
};
