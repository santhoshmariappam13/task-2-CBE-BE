const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
  },
  pickup: { type: String, required: true },
  drop: { type: String, required: true },
  cost: { type: Number, required: true }, isPaid: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["booked", "completed", "cancelled"],
    default: "booked",
  },
  customerRating: {
    type: Number,
    default: null,
  },
  customerFeedback: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Ride", rideSchema);
