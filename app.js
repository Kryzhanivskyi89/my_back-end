
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

const { api } = require("./routes");

const configPath = path.join(__dirname, "config", ".env");

require("dotenv").config({ path: configPath });

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.urlencoded({ extended: false }));

app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json());

app.use("/users", api.usersRouter);

// app.use("/contacts", api.contactsRouter);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode);
  res.json({ code: statusCode, stack: err.stack, message: err.message });
});

module.exports = app;
