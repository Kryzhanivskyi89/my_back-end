const Order = require("../../models/orders");

const addOrder = async (req, res) => {
  try {
    const addOrder = await Order.create(req.body); // Створює нове замовлення тільки з даними із тіла запиту
    res.status(201).json(addOrder); // Відправляє відповідь із статусом 201 (створено) і повертає створене замовлення
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to create order" }); // Відправляє відповідь із статусом 500 (внутрішня помилка сервера) і повідомленням про помилку
  }
};

module.exports = addOrder;

// const Order = require("../../models/orders");

// const addOrder = async (req, res) => {
//   const { _id: owner } = req.user;
//   try {
//     const addOrder = await Order.create({ ...req.body, owner });
//     res.status(201).json(addOrder);
//   } catch (error) {
//     res.status(500).json({ message: error.message || "Failed to create order" });
//   }
// };

// module.exports = addOrder;