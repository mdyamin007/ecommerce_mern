const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user");

router.route("/").get(usersController.findAll).post(usersController.signUp);

module.exports = router;
