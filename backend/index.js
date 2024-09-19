const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const blog_routes = require("./src/routes/blog_routes")
// Database Connection
const connectToDB = require("./connection");
connectToDB();

app.use("/", blog_routes);

app.listen(process.env.PORT || 3003, () => {
  console.log(`server listening on port ${process.env.PORT || 3003}`);
});
