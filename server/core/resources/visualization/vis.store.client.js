const Visualization = require("./vis.model");

exports.getVisAttrs = function() {
  return Object.keys(Visualization.schema.paths);
};

exports.findVisz = function() {
  return Visualization.find({}).exec();
};

exports.findVisById = function(id) {
  return Visualization.find({ _id: id }, { _id: false }).exec();
};

exports.createVis = function(params) {
  return new Visualization(params).save();
};

exports.updateVis = function(id, params) {
  return Visualization.updateOne({ _id: id }, { $set: params }).exec();
};

exports.deleteVis = function(id) {
  return Visualization.deleteOne({ _id: id }).exec();
};

exports.deleteVisz = function() {
  return Visualization.deleteMany({}).exec();
};
