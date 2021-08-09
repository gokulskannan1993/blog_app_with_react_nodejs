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
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        // update post
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );

        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("Not your Post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE  Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        // delete post
        await post.delete();

        res.status(200).json("Post Deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("Not your Post to delete");
    }
  } catch (err) {
    res.status(500).json(err);
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
