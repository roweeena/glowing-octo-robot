//TODO: route and export user routes from controller 

const userController = require('../controllers/userController.js');
const express = require('express');
const userAuth = require('../middleware/userAuth.js');
const checkAuth = userAuth.checkAuth

const router = express.Router();

// router.get('/userIn', checkAuth, userController.userIn); // need to rename this <-- auth user
router.get('/trips', userController.trips); // <-- getting all trips
router.get('/:id', userController.getUser); // <-- getting user info
// router.post('/signup', userController.signup); 
// router.post('/login', userController.login);
// router.post('/createTrip', userController.createTrip);

module.exports = router