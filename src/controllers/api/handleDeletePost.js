const Post = require("../../models/post");
const handleDeletePost = async (req, res) => {
  // get id from req params
  try {
    const deletedPosts = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    // destroy post
    res.json(deletedPosts);
  } catch (error) {
    res.status(500).json({ error: "Unable to delete Post(s)" });
  }
};

module.exports = handleDeletePost;
