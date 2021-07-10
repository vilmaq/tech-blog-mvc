require("dotenv").config();
const Sequelize = require("../../config/connection");
const { User, Post, Comment } = require("../../models");
const users = require("./data/users.json");
const posts = require("./data/posts.json");
const comments = require("./data/comments.json");

const seed = async () => {
  await Sequelize.sync({ force: true });

  await User.bulkCreate(users);
  console.log("Successfully seeded users");

  await Post.bulkCreate(posts);
  console.log("Successfully seeded posts");

  await Comment.bulkCreate(comments);
  console.log("Successfully seeded comments");

  process.exit(0);
};

seed();
