'use strict';
var Promise = require('bluebird');

var Bear = require('../../../models/bear'),
    Cub = require('../../../models/cub'),
    logger = require('../../../core/utils/logger');

module.exports = function(req, res) {
  var newCub = new Cub();

  newCub.name = req.body['name'];

  Promise.all([
    Bear.findOne({
      name: req.body['mother']
    }).exec(),
    Bear.findOne({
      name: req.body['father']
    }).exec()
  ].map(function(x) { return x.reflect(); }))
    .then(function(results) {
      newCub.parents.mother = results[0].value()._id
      newCub.parents.father = results[1].value()._id
      newCub.save()
        .then(function(cub) {
          Bear.findOneAndUpdate({
            _id: results[0].value()._id
          }, {
            $push: { 'cubs': cub._id }
          }, { upsert: true })
            .catch(function(err) {
              logger.error(err);
              res.status(404).end();
            });
          Bear.findOneAndUpdate({
            _id: results[1].value()._id
          }, {
            $push: { 'cubs': cub._id }
          }, { upsert: true })
            .catch(function(err) {
              logger.error(err);
              res.status(404).end();
            });

          res.json(cub);
        })
        .catch(function(err) {
          logger.error(err);
          res.status(404).end();
        });
    })
    .catch(function(err) {
      logger.error(err);
      res.status(404).end();
    });
};
