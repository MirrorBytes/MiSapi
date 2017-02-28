'use strict';
var Cub = require('../../../models/cub'),
    logger = require('../../../core/utils/logger');

module.exports = {
  All: function(req, res) {
    Cub.find({})
      .exec()
      .then(function(cubs) {
        res.json(cubs);
      })
      .catch(function(err) {
        logger.error(err);
        res.status(404).end();
      });
  },
  One: function(req, res) {
    Cub.findOne({
      _id: req.params['cubs']
    })
      .exec()
      .then(function(cub) {
        res.json(cub);
      })
      .catch(function(err) {
        logger.error(err);
        res.status(404).end();
      });
  }
};
