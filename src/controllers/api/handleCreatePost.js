const Post = require("../../models/post");

const handleCreatePost = async (req, res) => {
  // get title and body from req body
  try {
    const body = req.body;
    // insert new post with userId
    const newPost = await Post.create({ ...body, user_id: req.session.userId });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Unable to create the post" });
  }
};

module.exports = handleCreatePost;
