const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");

const validateEmail = function(email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateEmail,
      message: "Invalid email"
    }
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"]
  },
  description: {
    type: String,
    maxlength: 240
  }
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hash(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
