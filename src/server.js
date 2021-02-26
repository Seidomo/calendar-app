'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/router.js');
const dateRoutes = require('./routes/router.js');
const logger = require('./middleware/logger.js');

// Prepare the express app
const app = express();

app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(cors());
app.use(morgan('dev'));
app.use(logger);


// Routes
app.use(authRoutes);
app.use(dateRoutes);

// Catchalls
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ==> ${port}`);
    });
  },
};
