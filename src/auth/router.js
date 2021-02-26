'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./models/users.js');
const basicAuth = require('./middleware/basic.js');
// const bearerAuth = require('./middleware/bearer.js');
// const permissions = require('./middleware/acl.js');

authRouter.post('/signup', async (req, res, next) => {
  try {
    // let user = new User(req.body);
    // const userRecord = await user.save();
    // const output = {
    //   user: userRecord,
    //   token: userRecord.token,
    // };
    // res.status(201).json(output);
    let user = new User(req.body);
    const userRecord = await user.save(req.body);
    res.status(201).json(userRecord);
  } catch (e) {
    next(e.message);
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  // const user = {
  //   user: req.user,
  //   token: req.user.token,
  // };
  // res.status(200).json(user);
  res.status(200).json({user: req.user});
});



module.exports = authRouter;
