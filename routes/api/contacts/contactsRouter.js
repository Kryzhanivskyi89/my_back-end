const express = require('express');

const contactsRouter = express.Router();

const contactControllers = require('../../../controlers/contacts');

const { isValidId, authenticate } = require('../../../middlewares');

const { validateBody } = require("../../../decorators");

const schemas = require("../../../schemas/contacts");

// router.use("/", authenticate);


contactsRouter.post('/addContact', authenticate, validateBody(schemas.contactsAddSchema), contactControllers.addContacts);

contactsRouter.get('/fetchAll', authenticate, contactControllers.getAllContacts);

contactsRouter.delete('/:contactId', authenticate, contactControllers.deleteContactById);

module.exports = contactsRouter;