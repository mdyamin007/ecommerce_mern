const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
    default: "user",
  },
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      email: this.email,
      password: this.password,
    },
    process.env.JWTPRIVATEKEY || "secret",
    {
      expiresIn: "7d",
    }
  );
  return token;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
