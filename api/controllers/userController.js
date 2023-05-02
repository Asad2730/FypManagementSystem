const Users = require("../models/user");

//Get All Users
const user_all = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

//Get Single User
const user_details = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id);
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Add User
const user_add = async (req, res) => {
  const user = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    profileImage: req.body.profileImage,
    role: req.body.role,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Delete User
const user_delete = async (req, res) => {
  try {
    const removeUser = await Users.findByIdAndDelete(req.params.id);
    res.json(removeUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update User
const user_update = async (req, res) => {
  try {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      profileImage: req.body.profileImage,
      role: req.body.role,
    };

    const updatedUser = await Users.findByIdAndUpdate(
      { _id: req.params.id },
      user
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  user_all,
  user_details,
  user_add,
  user_delete,
  user_update,
};
