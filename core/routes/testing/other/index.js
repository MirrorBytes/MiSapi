'use strict';
var get = require('./lib/get'),
    create = require('./lib/create'),
    update = require('./lib/update'),
    remove = require('./lib/remove');

module.exports = {
  getAll: function(req, res) {
    get.All();
  },
  getOne: function(req, res) {
    get.One();
  },
  create: function(req, res) {
    create();
  },
  update: function(req, res) {
    update();
  },
  remove: function(req, res) {
    remove();
  }
};
