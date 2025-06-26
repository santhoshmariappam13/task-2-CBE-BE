const Customer = require('../models/Customer');

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};


exports.addCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const saved = await customer.save();
    res.status(201).json({
      message: "Customer created successfully",
      customerId: saved._id,
      customer: saved,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Customer deleted' });
};
