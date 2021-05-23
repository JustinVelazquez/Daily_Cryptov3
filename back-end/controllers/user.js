//Here we will create our controller to handle the logic of our actual route requests.
//Same as the routes, it will most likely be the same amount of controllers which we will eventually export out.
const User = require('../models/user.js');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find().lean();
      res.json(users);
    } catch (err) {
      console.log(err);
    }
  },
  addUser: async (req, res) => {
    try {
      const user = await req.body;
      await User.create({
        userName: user.userName,
        email: user.email,
      });
      console.log('New User has been added');
    } catch (err) {
      console.log(err);
    }
  },
};
