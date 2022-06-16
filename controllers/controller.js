const User = require("../models/User");
const bcryptJS = require("bcryptjs");

// POST
exports.createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({
      username: username,
      password: password,
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      return res.status(404).json({ success: false, msg: "No user found!" });
    }
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET ONE
exports.getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// UPDATE
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, password } = req.body;

    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, msg: "User deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
