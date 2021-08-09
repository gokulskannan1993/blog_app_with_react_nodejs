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
    // fetch a single post
    const post = await Post.findById(req.params.id);

    // response
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MULTIPLE POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const category = req.query.category;

  try {
    // fetch a multiple posts
    let posts;

    // if there is a username
    if (username) {
      posts = await Post.find({ username: username });
    }

    // if there is a category
    else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    }

    // fetch all posts
    else {
      posts = await Post.find();
    }
    // response
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
