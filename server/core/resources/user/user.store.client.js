const User = require("./user.model");

exports.findUserById = function(id) {
  return User.find({ _id: id }, { _id: false }).exec();
};

exports.createUser = function(params) {
  return new User(params).save();
};

exports.updateUser = function(id, params) {
  return User.updateOne({ _id: id }, { $set: params }).exec();
};

exports.deleteUser = function(id) {
  return User.remove({ _id: id }).exec();
};
