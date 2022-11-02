const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
.get('/flight', controller.getFlights)
.get('/flight/:id', controller.getFlight)
.post('/flight', controller.bookFlight)
.put('/flight/:id', controller.updateFlight)
.delete('/flight/:id', controller.deleteFlight)

module.exports = router;

