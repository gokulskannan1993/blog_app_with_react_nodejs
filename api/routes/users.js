const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Update User
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // encrypt password
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(req.body.password, salt);
    }
    try {
      // update all creadentials
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Not your account");
  }
});

module.exports = router;
