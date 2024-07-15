
const { ContactsService } = require('../../services/contacts');

const { HttpError } = require('../../helpers');

const deleteContactById = async (req, res) => {
  
  const { id } = req.params;

  const contactByID = await ContactsService.deleteContacts(id);
  if (!contactByID) {
    throw new HttpError(404, `Contact with id ${id} not found`);
  }
  res.status(200).json({ message: 'contact deleted' });
};

module.exports = deleteContactById;