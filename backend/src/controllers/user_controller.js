const { User } = require("../models/user_model");

const getUsers = async (req, res) => {
  const response = await User.find({});
  res.json(response);
};

const createUser = async (req, res) => {
  const body = req.body;
  try {
    const createUser = await User.create(body);
    res.status(201).json({ msg: "User created succesfully" });
  } catch (error) {
    console.log(error)
    res.status(409).json({msg:error.errmsg})
  }
 
};

const getUserById = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  res.status(200).json(user);
};

const deleteUserById = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndDelete(userId);
  res.status(200).json({ msg: "user deleted succesfully!!!" });
};

const updateUserByID = async(req,res)=>{
    const userId = req.params.userId;
    const updateData = req.body;
    const user = await User.findByIdAndUpdate(userId);
    res.status(200).json({msg:"user updated succesfully!!!"})
}

module.exports = { getUsers, createUser, getUserById ,deleteUserById,updateUserByID};
