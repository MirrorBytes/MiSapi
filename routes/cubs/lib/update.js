'use strict';
var Cub = require('../../../models/cub'),
    logger = require('../../../core/utils/logger');

module.exports = function(req, res) {
  Cub.findOneAndUpdate({
    _id: req.params['cubs']
  }, {
    $set: {
      name: req.body['name']
    }
  }, { upsert: true })
    .exec()
    .then(function(cub) {
      res.json(cub);
    })
    .catch(function(err) {
      logger.error(err);
      res.status(404).end();
    });
};
