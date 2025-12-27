const express = require("express");
const userController = require("./modules/users/controller");

const app = express();

app.use(express.json());

app.post("/users", userController.createUser);

module.exports = app;
