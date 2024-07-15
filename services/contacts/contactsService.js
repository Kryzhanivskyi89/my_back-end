const { Contacts } = require("../../models");

class ContactsService {
    async getAll() {
        const result = await Contacts.find();
        return result;
    };

    async addContact(contact) {
        const newContact = await Contacts.create({ ...contact });
        return newContact;
    };

    async deleteContacts(id) {
        const deleteContact = await Contacts.findOneAndRemove({ _id: id });
        return deleteContact;
    };
}

module.exports = new ContactsService();