const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const app = express();

dotenv.config();
app.use(express.json());

// Connection to the database in MONGO ATLAS
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // userCreateIndex: true,
  })
  .then(console.log("Connected to DB"))
  .catch((err) => console.log(err));

// Routes to auth
app.use("/api/auth", authRoute);

app.listen("5000", () => {
  console.log("Backend is running");
});
