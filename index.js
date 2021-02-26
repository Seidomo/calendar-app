'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server.js');

const PORT = process.env.PORT || 3005;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
};

mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => { server.start(PORT); })
  .catch(e => console.error('Not Found', e.message));
