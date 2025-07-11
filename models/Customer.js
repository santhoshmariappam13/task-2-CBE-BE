const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
