const mongoose = require('mongoose');

//Create a new Mongoose model schema for our user model. we will eventually export this model out to our controllers

//Our UserModel will be the values we back from a google Auth login. For now we will have dummy values just to test out our logic
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
