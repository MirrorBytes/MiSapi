'use strict';
var Cub = require('../../../models/cub'),
    logger = require('../../../core/utils/logger');

module.exports = function(req, res) {
  Cub.findOneAndRemove({
    _id: req.params['cubs']
  })
    .exec()
    .then(function(cub) {
      res.status(204).send(cub);
    })
    .catch(function(err) {
      logger.error(err);
      res.status(404).end();
    });
};
