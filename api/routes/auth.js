const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Route to create a new user
router.post("/register", async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(req.body.password, salt);

    // create a new user object with User model
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
