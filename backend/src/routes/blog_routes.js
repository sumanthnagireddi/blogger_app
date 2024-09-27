const express = require("express");
const { getBlogs, createBlog,getBlogByID, updateBlogByID, getUserBlogs } = require("../controllers/blog_controller");
const blog_router = express.Router();

blog_router.route("/").get(getBlogs).post(createBlog);
blog_router.route("/:blogId").get(getBlogByID).put(updateBlogByID);
blog_router.route("/user/:userId").get(getUserBlogs);

module.exports = blog_router;
