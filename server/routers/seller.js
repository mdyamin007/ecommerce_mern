const express = require("express");
const sellerController = require("../controllers/seller");

const router = express.Router();

router
  .route("/")
  .get(sellerController.findAll)
  .post(sellerController.createSeller);

router.route("/:sellerId").get(sellerController.findById);

module.exports = router;
