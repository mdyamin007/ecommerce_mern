const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user");

router.route("/").get(usersController.findAll).post(usersController.signUp);

router.route("/login").post(usersController.login);

module.exports = router;
