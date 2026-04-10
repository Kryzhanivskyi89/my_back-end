const ContactsService = require('../../services/contacts');
const { HttpError } = require('../../helpers');

const deleteContactById = async (req, res) => {
  const { contactId } = req.params; 
  const contactByID = await ContactsService.deleteContacts(contactId);

  if (!contactByID) {
    throw HttpError(404, `Contact with id ${contactId} not found`);
  }

  res.status(200).json({ message: 'contact deleted', id: contactId });
};

module.exports = deleteContactById;
