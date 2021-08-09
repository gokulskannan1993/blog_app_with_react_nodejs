const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

// routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");

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

// Image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File uploaded");
});

// Routes to auth
app.use("/api/auth", authRoute);

// Routes to user
app.use("/api/users", userRoute);

// Routes to posts
app.use("/api/posts", postRoute);

// Routes to categories
app.use("/api/categories", catRoute);

app.listen("5000", () => {
  console.log("Backend is running");
});
