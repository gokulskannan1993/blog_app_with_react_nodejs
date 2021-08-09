const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Route to create a new user
router.post("/register", async (req, res) => {
  try {
    // Password Encryption
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    // create a new user object with User model
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to login a user
router.post("/login", async (req, res) => {
  try {
    // checking for email in db
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(400).json("Wrong Username");

    // checking for password with hashed value in the db
    const validated = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    !validated && res.status(400).json("Wrong Password");
    
    // send everything but password
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
