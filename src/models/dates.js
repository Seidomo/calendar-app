'use strict';

const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
  date: { type: Date, required: true },
  events: [{ type: String, required: true }],
});

const dateModel = mongoose.model('dates', dateSchema);

module.exports = dateModel;

