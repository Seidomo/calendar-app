'use strict';

const express = require('express');

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server.js');
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();


// app.get('/', getIndexpage);
// app.get('/:role', getCalendar);
// //app.post('/verify', verifyUser)

// function getIndexpage(req, res){
//   res.render('home.ejs');
// }

// function getCalendar(req, res){
//   req.params.role
//   console.log(req.params);
//   // model.find(date) first the date
//   // events from the first date
//   // filter based on req.params.role
//   res.render('calendar.ejs', {role: req.params.role, date: "11/20/2021", worker: ["Party", "Ping Pong"], vp: ["boring meeting"], executive: ["Really boring meeting"]})

// }

app.use('*', (req, res) => res.status(404).send('Route you are looking for cannot be found'));

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
};
mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    // Start the web server
    server.start(process.env.PORT);
  }).catch(e => console.error('Not Found', e.message));

