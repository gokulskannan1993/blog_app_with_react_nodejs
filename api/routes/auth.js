const router = require("express").Router();
const User = require("../models/User");

//Sign Up
router.post("/register", async (req, res) => {
  try {

    // create a new user object with User model
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
