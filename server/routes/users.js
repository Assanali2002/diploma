const express = require("express");
const router = express.Router();
const {
  createUser,
  findUser,
  login,
  updateLikes,
} = require("../controllers/users");

//users
router.route("/createUser").post(createUser);
router.route("/login").post(login);
router.route("/findUser=:email").get(findUser);
//likes for users
router.route("/updateLikes/:id").post(updateLikes);
module.exports = router;
