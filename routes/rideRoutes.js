const express = require('express');
const router = express.Router();
const {
  bookRide,
  getAllRides,
  updateRide,
  deleteRide
} = require('../controllers/rideControllers');

// Real ride routes
router.get('/', getAllRides);        // ✅ To fetch all rides
router.post('/', bookRide);          // ✅ To book a ride
router.put('/:id', updateRide);      // ✅ To update (e.g. payment, rating)
router.delete('/:id', deleteRide);   // ✅ To delete a ride

module.exports = router;
