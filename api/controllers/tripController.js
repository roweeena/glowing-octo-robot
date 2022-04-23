const mongoose = require('mongoose')
const Trip = require('../models/tripModel.js');

     exports.createTrip = (req, res) => {
        const newTrip = new Trip(req.body)
        console.log('new trip', req.body)
        newTrip.save((err, trip) => {
            if (err) res.send(err)
            res.json(trip)
        })
    }
