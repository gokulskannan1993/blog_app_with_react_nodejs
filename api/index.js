const express = require("express");

const app = express();

app.use("/", (req, res) => {
  console.log("Hello World");
});

app.listen("8000", () => {
  console.log("Backend is running");
});
