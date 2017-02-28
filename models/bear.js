'use strict';
var mongoose = require('mongoose');

var BearSchema = new mongoose.Schema({
  name: String,
  cubs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cub' }]
});

module.exports = mongoose.model('Bear', BearSchema);
