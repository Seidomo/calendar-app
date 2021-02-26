
'use strict';

// const fs = require('fs');
const express = require('express');
// const Collection = require('../auth/models/users.js');
// const bearerAuth = require('../auth/middleware/bearer.js');
// const accessControl = require('../auth/middleware/acl.js');


const router = express.Router();

router.use(express.static('./public'));



// router.use(express.static('./public'));

// const models = new Map();

// router.param('model', (req, res, next) => {
//   const modelName = req.params.model;
//   if (models.has(modelName)) {
//     req.model = models.get(modelName);
//     next();
//   } else {
//     const fileName = `${__dirname}/../models/${modelName}/model.js`;
//     if (fs.existsSync(fileName)) {
//       const model = require(fileName);
//       models.set(modelName, new Collection(model));
//       req.model = models.get(modelName);
//       next();
//     }
//     else {
//       next('Invalid Model');
//     }
//   }
// });

router.get('/:date', handleGetAll);
router.get('/:date/:id', handleGetOne);
router.get('/', getHomePage);
router.post('/:date', handleCreate);
router.put('/:date/:id', handleUpdate);
router.delete('/:date/:id', handleDelete);

async function handleGetAll(req, res) {
  console.log('we made it');
  res.render('calendar.ejs');
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id);
  res.status(200).json(theRecord);
}

async function getHomePage(req, res) {
  res.status(200).render('home.ejs');
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}


module.exports = router;




