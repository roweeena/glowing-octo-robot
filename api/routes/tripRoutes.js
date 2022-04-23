//TODO: route and export user routes from controller 
const tripController = require('../controllers/tripController.js');
const express = require('express');
const router = express.Router();

router.post('/new', tripController.createTrip)

// router.get('/userIn', checkAuth, userController.userIn); // need to rename this <-- auth user


module.exports = router