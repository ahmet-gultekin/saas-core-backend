const express = require("express");

const app = express();

// Body'den JSON okuyabilmek için
app.use(express.json());

module.exports = app;

