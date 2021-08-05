const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Connection to the database in MONGO ATLAS
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // userCreateIndex: true,
  })
  .then(console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use("/", (req, res) => {
  console.log("Hello World");
});

app.listen("5000", () => {
  console.log("Backend is running");
});
