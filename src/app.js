const express = require("express");
const router = require("./router");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(router);
app.use(cors);

module.exports = app;