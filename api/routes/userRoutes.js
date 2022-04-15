//TODO: route and export user routes from controller 

import * as controller from '../controllers/user.js';
import express from 'express';
import { userAuth } from '../middleware/userAuth.js';

const router = express.Router();

router.get('/in', userAuth, controller.in); // need to rename this <-- auth user
router.get('/:id', controller.getUser); // <-- getting user info
router.get('/trips', controller.trips); // <-- getting all trips
router.post('/signup', controller.signup); 
router.post('/login', controller.login);
router.post('/createTrip', controller.createTrip);