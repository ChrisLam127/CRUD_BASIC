const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/controller");

router.post("/create", createUser);
router.get("/get", getUsers);
router.get("/get/:id", getOneUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
