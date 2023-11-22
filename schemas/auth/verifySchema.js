const Joi = require("joi");

const {
  emailRegexp,
} = require("../../constants/patterns");

const verifySchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required().messages({
        "any.required": `missing required email field`,
        "string.empty": `email cannot be an empty field`,
    }),
});

module.exports = {
    verifySchema
};