const express = require("express");
const {
  // resendSubscribe,
  subscribe,
} = require("../../../controlers/auth/emailControllers");

const getVerity = require ('../../../controlers/auth/getVerity')
const schemas = require("../../../schemas/auth");
const { validateBody } = require("../../../decorators");
const { authenticate } = require("../../../middlewares");

const subscribeRouter = express.Router();

// subscribeRouter.post(
//   "/",
//   authenticate,
//   validateBody(schemas.verifySchema),
//   resendSubscribe
// );

subscribeRouter.post(
  "/",
  authenticate,
  validateBody(schemas.verifySchema),
  subscribe
);

// subscribeRouter.get("/:subscriptionToken", authenticate, subscribe);

subscribeRouter.get("/:subscriptionToken", authenticate, getVerity);


module.exports = subscribeRouter;