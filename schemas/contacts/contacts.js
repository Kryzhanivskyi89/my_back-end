const Joi = require("joi");

const { phoneRegexp } = require("../../constants/patterns");

const contactsAddSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": `missing required name field`,
        "string.empty": `name cannot be an empty field`,
    }),
    phone: Joi.string().pattern(phoneRegexp).required().messages({
        "any.required": `missing required phone field`,
        "string.empty": `phone cannot be an empty field`,
    }),
    
});



module.exports = {
    contactsAddSchema,
    
};