'use strict';
var mongoose = require('mongoose');

var CubSchema = new mongoose.Schema({
  name: String,
  parents: {
    mother: { type: mongoose.Schema.Types.ObjectId, ref: 'Bear' },
    father: { type: mongoose.Schema.Types.ObjectId, ref: 'Bear' }
  }
});

module.exports = mongoose.model('Cub', CubSchema);
