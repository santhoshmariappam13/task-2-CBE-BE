const Driver = require('../models/Driver');

// @desc   Get all drivers
exports.getDrivers = async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
};

// @desc   Add new driver
exports.addDriver = async (req, res) => {
  const driver = new Driver(req.body);
  const saved = await driver.save();
  res.status(201).json(saved);
};

// @desc   Update driver
exports.updateDriver = async (req, res) => {
  const updated = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// @desc   Delete driver
exports.deleteDriver = async (req, res) => {
  await Driver.findByIdAndDelete(req.params.id);
  res.json({ message: 'Driver deleted' });
};
