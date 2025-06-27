const Ride = require('../models/Ride');

// Book a ride
const bookRide = async (req, res) => {
  try {
    const { customerId, driverId, pickupLocation, dropLocation, price } = req.body;

    const newRide = new Ride({
      customerId,
      driverId,
      pickupLocation,
      dropLocation,
      price,
    });

    const savedRide = await newRide.save();
    res.status(201).json(savedRide);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all rides
const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find().populate('customerId driverId');
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update ride (payment/feedback)
const updateRide = async (req, res) => {
  try {
    const updatedRide = await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRide);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete ride
const deleteRide = async (req, res) => {
  try {
    await Ride.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ride deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  bookRide,
  getAllRides,
  updateRide,
  deleteRide,
};
