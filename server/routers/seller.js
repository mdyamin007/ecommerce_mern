const express = require("express");
const sellerController = require("../controllers/seller");

const router = express.Router();

router
  .route("/")
  .get(sellerController.findAll)
  .post(sellerController.createSeller);

module.exports = router;
