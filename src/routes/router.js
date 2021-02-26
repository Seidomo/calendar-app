'use strict';

const express = require('express');
const router = express.Router();

router.use(express.static('./public'));

const ModelInterface = require('../models/data-collection-class.js');
const Eventmodel = require('../models/dates.js');
const eventController = new ModelInterface(Eventmodel);


// Routes
router.get('/', getHomePage);
router.get('/:role', getCalendar);
router.get('/:role/date', getDate),
router.post('/:role', createEvent);
router.delete('/:role/:id', deleteEvent);

// Route Handlers
function getHomePage(req, res) {
  res.status(200).render('home.ejs');
}

async function getCalendar(req, res) {
  req.params.role;
  console.log(req.params);
  // model.find(date) first the date
  // events from the first date
  // filter based on req.params.role
  let eventObject = await Eventmodel.findOne({date: '02/27/2021'});
  console.log(eventObject);
  res.render('calendar.ejs', {
    role: req.params.role,
    date: '11/20/2021',
    employee: eventObject.employee,
    manager: eventObject.manager,
    executive: eventObject.executive,
  });
}

async function getDate(req, res){
  let eventObject = await Eventmodel.findOne({date: req.query.date});
  res.status(200).render('calendar.ejs',{
    role: req.params.role,
    date: '11/20/2021',
    employee: eventObject.employee,
    manager: eventObject.manager,
    executive: eventObject.executive,
  });
}

async function createEvent(req, res) {
  let obj = req.body;
  let newRecord = await eventController.create(obj);
  res.status(201).json(newRecord);
}

async function deleteEvent(req, res) {
  // let id = req.params.id;
  // let deletedRecord = await req.model.delete(id);
  // res.status(200).json(deletedRecord);
}



module.exports = router;