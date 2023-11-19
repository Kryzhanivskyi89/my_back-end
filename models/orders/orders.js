const { model, Schema } = require('mongoose');

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    phone: {
        type: String,
    },
    
    description: {
      type: String,
    },
    
  },
  { versionKey: false, timestamps: true }
);

const Order = model('orders', orderSchema);

module.exports = Order;