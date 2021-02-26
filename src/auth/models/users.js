'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'employee', enum: ['employee', 'manager', 'executive'] },
});


users.virtual('capabilities').get(function () {
  let acl = {
    employee: ['read'],
    manager: ['read', 'create', 'update'],
    executive: ['read', 'create', 'update', 'delete'],
  };
  return acl[this.role];
});

users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username });
  const valid = await bcrypt.compare(password, user.password);
  if (valid) { return user; }
  throw new Error('Invalid User');
};




module.exports = mongoose.model('users', users);
