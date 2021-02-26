'use strict';

const express = require('express');
const router = express.Router();

// Routes
router.get('/', getHomePage);
router.get('/:role', getCalendar);
router.post('/:role/:id', createEvent);
router.delete('/:role/:id', deleteEvent);

// Route Handlers
function getHomePage(req, res) {
  res.status(200).render('home.ejs');
}

function getCalendar(req, res) {
  req.params.role;
  console.log(req.params);
  // model.find(date) first the date
  // events from the first date
  // filter based on req.params.role
  res.render('calendar.ejs', {
    role: req.params.role,
    date: '11/20/2021',
    worker: ['Party', 'Ping Pong'],
    vp: ['boring meeting'],
    executive: ['Really boring meeting'],
  });
}

async function createEvent(req, res) {
  // let obj = req.body;
  // let newRecord = await req.model.create(obj);
  // res.status(201).json(newRecord);
}

async function deleteEvent(req, res) {
  // let id = req.params.id;
  // let deletedRecord = await req.model.delete(id);
  // res.status(200).json(deletedRecord);
}



module.exports = router;