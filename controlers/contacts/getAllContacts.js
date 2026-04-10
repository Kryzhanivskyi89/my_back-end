
const  ContactsService  = require('../../services/contacts');

const getAllContacts = async (req, res) => {
  const allContacts = await ContactsService.getAll();
  res.json(allContacts);
};

module.exports = getAllContacts;