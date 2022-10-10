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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.findOne({ email });

    if (!user) {
      return res.status(400).send({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ message: "Password mismatch!" });
    }

    const token = await user.generateAuthToken();
    res.status(200).send({
      message: "Logged in successfully!",
      userId: user._id,
      userType: user.userType,
      authToken: `Bearer ${token}`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = { signUp, findAll, login };
