const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//@route POST api/posts
//@desc Test route
//@access Private
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //If there are errors
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password"); //Get user without password
      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save(); //Save the post
      res.json(post); //Return the post
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route GET api/posts
//@desc Get all posts
//@access Private
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 }); //Get all posts and sort by date in descending order
    res.json(posts); //Return all posts
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET api/posts/:id
//@desc Get post by ID
//@access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); //Find post by ID
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(post); //Return the post
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route DELETE api/posts/:id
//@desc Delete a post
//@access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); //Find post by ID
    // If post does not exist
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    //Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await post.deleteOne(); //Remove the post
    res.json({ msg: "Post removed" }); //Return a message
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
