'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;
app.use(express.static('./public'));


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', getIndexpage);
app.get('/:role', getCalendar);
//app.post('/verify', verifyUser)

function getIndexpage(req, res){
  res.render('home.ejs');
}

function getCalendar(req, res){
  req.params.role
  console.log(req.params);
  // model.find(date) first the date
  // events from the first date
  // filter based on req.params.role
  res.render('calendar.ejs', {role: req.params.role, date: "11/20/2021", worker: ["Party", "Ping Pong"], vp: ["boring meeting"], executive: ["Really boring meeting"]})

}


app.use('*', (req, res) => res.status(404).send('Route you are looking for cannot be found'));

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
