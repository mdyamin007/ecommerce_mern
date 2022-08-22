const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  sellerName: {
    type: String,
    required: true,
  },
  sellerEmail: {
    type: String,
    required: true,
    unique: true,
  },
  sellerPhone: {
    type: String,
    required: true,
  },
  sellerAddress: {
    type: String,
    required: true,
  },
  sellerWebsite: {
    type: String,
  },
  sellerDescription: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: "unverified",
  },
});

const Seller = mongoose.model("Seller", SellerSchema);

module.exports = Seller;
