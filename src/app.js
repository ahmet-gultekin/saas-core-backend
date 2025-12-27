const express = require("express");
const userController = require("./modules/users/controller");

const app = express();

app.use(express.json());

const userRoutes = require("./modules/users/routes");

app.use("/users", userRoutes);


module.exports = app;
