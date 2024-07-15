const Contacts = require("../../models/contacts");
const { ContactsService } = require('../../services/contacts');

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const contactData = {
          ...req.body,
          name: this.name,
          phone: number,
          owner,
      };
  const nawContact = await ContactsService.addContact(contactData);
  res.status(201).json(nawContact);
};

module.exports = addContact;