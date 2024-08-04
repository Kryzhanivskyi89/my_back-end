const Order = require("../../models/orders");

const addOrder = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    const addOrder = await Order.create({ ...req.body, owner });
    res.status(201).json(addOrder);
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to create order" });
  }
};

module.exports = addOrder;