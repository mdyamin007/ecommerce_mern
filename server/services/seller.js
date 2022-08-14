const Seller = require("../models/Seller");

const createSeller = async (seller) => {
  return await Seller.create(seller);
};

const findAll = async () => {
  return await Seller.find();
};

const findById = async (sellerId) => {
  const foundSeller = await Seller.findById(sellerId);
  return foundSeller;
};

module.exports = {
  createSeller,
  findAll,
  findById,
};
