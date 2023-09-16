const express = require("express");

const authController = require("../../../controlers/auth");

const { authenticate, upload } = require("../../../middlewares");

const { validateBody } = require("../../../decorators");

const {
  registerSchema,
  loginSchema,
  userUpdateSubscription,
  updateSchema,
} = require("../../../schemas/auth");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), authController.register);

usersRouter.post("/login", validateBody(loginSchema), authController.login);

usersRouter.get("/current", authenticate, authController.getCurrent);

usersRouter.post("/logout", authenticate, authController.logout);

usersRouter.get("/verity/:verificationToken", authenticate, authController.getVerity);

usersRouter.patch("/subscribe", authenticate, validateBody(userUpdateSubscription), authController.userUpdateSubscription);

usersRouter.put("/update", authenticate, validateBody(updateSchema), upload.single("avatar"), authController.updateUser);

module.exports = usersRouter;