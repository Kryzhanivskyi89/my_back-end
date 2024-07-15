const { model, Schema } = require('mongoose');

const Joi = require('joi');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    phone: {
      type: String,
      required: [true, 'Set numder for contact'],
    },
  },
  { versionKey: false, timestamps: true }
);

const Contacts = model('contacts', contactSchema);

module.exports = Contacts;