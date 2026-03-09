const ContactsService = require('../../services/contacts');

const addContact = async (req, res) => {
    const { _id: owner } = req.user;
    const { name, phone } = req.body;

    const contactData = { name, phone, owner };

    const newContact = await ContactsService.addContact(contactData);
    res.status(201).json(newContact);
};

module.exports = addContact;
