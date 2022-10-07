const UserService = require("../services/user");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    if (!req.body.email && !req.body.password)
      return res.status(400).send({ message: "User/Email must be given!" });

    const user = await UserService.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).send({ message: "User already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await UserService.createUser({
      ...req.body,
      password: hashedPassword,
    });

    res.status(200).send({ message: "User created successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const findAll = async (req, res, next) => {
  try {
    const users = await UserService.findAll();
    res.status(200).json({
      message: "Users fetched successfully",
      users: users,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { signUp, findAll };
