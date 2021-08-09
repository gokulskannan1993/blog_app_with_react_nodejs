const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE New Post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    // save the new post to db
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE  Post
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
        { new: true } // to update to new value
      );

      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Not your account");
  }
});

// DELETE  Post
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      // find the user
      const user = await User.findById(req.params.id);
      try {
        // delete all posts of the user
        await Post.deleteMany({ username: user.username });
        // delete all creadentials
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json("User deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("Not your account");
  }
});

// GET Post
router.get("/:id", async (req, res) => {
  try {
    // fetch a single user
    const user = await User.findById(req.params.id);

    // dont fetch the password of the user
    const { password, ...others } = user._doc;

    // response
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
