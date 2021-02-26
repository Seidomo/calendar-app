'use strict';

const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
  date: { type: String, required: true },
  employee: [{ type: String,  required: true }],
  manager: [{ type: String , required: true }],
  executive: [{ type: String, required: true }],
});

const dateModel = mongoose.model('dates', dateSchema);

module.exports = dateModel;

