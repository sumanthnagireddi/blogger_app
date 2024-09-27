const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const blog_routes = require("./src/routes/blog_routes")
const user_routes = require("./src/routes/user_route")

// Database Connection
const connectToDB = require("./connection");

connectToDB();
app.use(express.json());

app.use("/blogs", blog_routes);
app.use("/user",user_routes)

app.listen(process.env.PORT || 3003, () => {
  console.log(`server listening on port ${process.env.PORT || 3003}`);
});
