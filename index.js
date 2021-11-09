const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto"); // md5
const port = process.env.PORT || 3000;

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
//
app.use("/", searchsRouter);
//
//routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//
//start listening to server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
