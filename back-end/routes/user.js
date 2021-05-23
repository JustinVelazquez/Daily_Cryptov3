// Here we pass the route request to our controller so it can handle the  logic
//There will most likely be at least 2 routes.
//GET user
//POST create user

const express = require('express')
const router = express.Router();

const userController = require('../controllers/user')

router.get('/', userController.getUsers)

router.post('/addUser', userController.addUser)


module.exports = router;