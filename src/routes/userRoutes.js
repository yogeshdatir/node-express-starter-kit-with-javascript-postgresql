const express = require("express");

const {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router
  .get("/", getAllUsers)
  .post("/", addUser)
  .delete("/", deleteUser)
  .put("/", updateUser);

module.exports = router;
