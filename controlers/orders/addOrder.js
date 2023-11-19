const Order = require("../../models/orders");

const addOrder = async (req, res) => {
  const { _id: owner } = req.user;

  const addOrder = await Order.create({ ...req.body, owner });
  res.status(201).json(addOrder);
};

module.exports = addOrder;