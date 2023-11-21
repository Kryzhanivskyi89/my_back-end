const Joi = require("joi");

const {
  emailRegexp,
} = require("../../constants/patterns");

const userUpdateSubscription = Joi.object({
    inputEmail: Joi.string().required(),
    // subscription: Joi.string()
    //     // .valid(...subscriptionList)
    //     .required(),
});

// const verifySchema = Joi.object({
//     email: Joi.string().pattern(emailRegexp).required().messages({
//         "any.required": `missing required email field`,
//         "string.empty": `email cannot be an empty field`,
//     }),
// });

module.exports = {
    userUpdateSubscription,
    // verifySchema
};