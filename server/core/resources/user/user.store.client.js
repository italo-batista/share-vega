const User = require("./user.model");

exports.findUserById = function(id) {
  return User.find({ _id: id }, { _id: false }).exec();
};

exports.createUser = async function(params) {
  try {
    let user = new User(params);
    let hashPass = await user.generateHash(params.password);
    user.password = hashPass;
    let createdUser = await user.save();
    return createdUser;
  } catch (err) {
    throw err;
  }
};

exports.updateUser = function(id, params) {
  return User.updateOne({ _id: id }, { $set: params }).exec();
};

exports.deleteUser = function(id) {
  return User.remove({ _id: id }).exec();
};
