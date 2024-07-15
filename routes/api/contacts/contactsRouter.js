const express = require('express');

const contactsRouter = express.Router();

const contactControllers = require('../../../controlers/contacts');

const { isValidId, authenticate } = require('../../../middlewares');

const schemas = require("../../../schemas/contacts");

const { validateBody } = require("../../../decorators");

// router.use("/", authenticate);

contactsRouter.post('/addContact', validateBody(schemas.ordersAddSchema), contactControllers.addContacts);

contactsRouter.get('/fetchAll', contactControllers.getAllContacts);

contactsRouter.delete('/:contactId', contactControllers.deleteContactById);

module.exports = contactsRouter;