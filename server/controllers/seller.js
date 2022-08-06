const sellerService = require("../services/seller");

const createSeller = async (req, res) => {
  try {
    const seller = req.body;
    const createdSeller = await sellerService.createSeller(seller);
    req.status(201).json({
      message: "Seller created successfully",
      seller: createdSeller,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const findAll = async (req, res) => {
  try {
    const seller = await sellerService.findAll();
    res.status(200).json({
      message: "Sellers fetched successfully",
      seller: seller,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  createSeller,
  findAll,
};
