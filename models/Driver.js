const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 5,
  },
  earnings: {
    type: Number,
    default: 0,
  },
  completedRides: {
    type: Number,
    default: 0,
  },
  feedbacks: [
    {
      customerName: String,
      comment: String,
      rating: Number,
    },
  ],
});

module.exports = mongoose.model("Driver", driverSchema);
