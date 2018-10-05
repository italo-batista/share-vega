const Visualization = require("./vis.model");
const HttpStatus = require("../../constants/httpStatus");

// Display list of all Visualizations.
exports.index = function(req, res) {
  res.json("NOT IMPLEMENTED: Visualization list");
};

// Display details for a specific Visualization.
exports.show = function(req, res) {
  res.json("NOT IMPLEMENTED: Visualization detail: " + req.params.id);
};

// Handle Visualization create on POST.
exports.create = function(req, res) {
  var vis = new Visualization(req.body);
  vis
    .save()
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    })
    .then(createdVis => {
      res.status(HttpStatus.OK).json(createdVis);
    });
};

// Handle Visualization update on PUT.
exports.update = function(req, res) {
  res.json("NOT IMPLEMENTED: Visualization update PUT");
};

// Handle Visualization delete on DELETE.
exports.delete = function(req, res) {
  res.json("NOT IMPLEMENTED: Visualization delete DELETE");
};
