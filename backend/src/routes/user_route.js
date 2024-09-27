const express = require("express");
const { getUsers, createUser, getUserById, deleteUserById, updateUserByID } = require("../controllers/user_controller");

const user_router = express.Router();

user_router.route("/").get(getUsers).post(createUser)
user_router.route("/:userId").get(getUserById).delete(deleteUserById).put(updateUserByID)

module.exports = user_router;
