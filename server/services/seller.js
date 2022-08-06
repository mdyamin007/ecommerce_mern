const Seller = require("../models/Seller");

const createSeller = async (seller) => {
  return await Seller.create(seller);
};

const findAll = async () => {
  return await Seller.find();
};

module.exports = {
  createSeller,
  findAll,
};
