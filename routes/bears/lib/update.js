'use strict';
var Bear = require('../../../models/bear'),
    logger = require('../../../core/utils/logger');

module.exports = function(req, res) {
  Bear.findOneAndUpdate({
    _id: req.params['bears']
  }, {
    $set: {
      name: req.body.name
    }
  }, { upsert: true })
    .exec()
    .then(function(bear) {
      res.json(bear);
    })
    .catch(function(err) {
      logger.error(err);
      res.status(404).end();
    });
};
