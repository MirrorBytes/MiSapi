'use strict';
var Bear = require('../../../models/bear'),
    logger = require('../../../core/utils/logger');

module.exports = {
  All: function(req, res) {
    Bear.find({})
      .exec()
      .then(function(bears) {
        res.json(bears);
      })
      .catch(function(err) {
        logger.error(err);
        res.status(404).end();
      });
  },
  One: function(req, res) {
    Bear.findOne({
      _id: req.params['bears']
    })
      .exec()
      .then(function(bear) {
        res.json(bear);
      })
      .catch(function(err) {
        logger.error(err);
        res.status(404).end();
      });
  }
};
