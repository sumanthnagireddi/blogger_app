const { Blog } = require("../models/blog_model");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
};
const createBlog = async (req, res) => {
  const body = req.body;
  try {
    const createUser = await Blog.create(body);
    res.status(201).json({ msg: "Article created succesfully" });
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};
const getBlogByID = async (req, res) => {
  const blogId = req.params.blogId;
  const blog = await Blog.findById(blogId);
  res.status(200).json(blog);
};
const updateBlogByID = async (req, res) => {
  res.send(`${req.params.blogId} success`);
};

const getUserBlogs = async (req, res) => {
  const userId = req.params.userId;
  const blogs = await Blog.find({ authorId: userId });
  res
    .status(blogs?.length > 0 ? 200 : 404)
    .send(blogs?.length > 0 ? blogs : { msg: "No Blogs found for the user" });
};

module.exports = { getBlogs, createBlog, getBlogByID, updateBlogByID,getUserBlogs };
