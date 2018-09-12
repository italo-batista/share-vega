/**
 * Controller for user.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */

const User = require("./user.model");
const HttpStatus = require("../../constants/httpStatus");

exports.show = function(req, res) {
  res.json("NOT IMPLEMENTED: Visualization detail: " + req.params.id);
};

exports.create = function(req, res) {
  var user = new User(req.body);
  user
    .save()
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    })
    .then(createdUser => {
      res.status(HttpStatus.OK).json(createdUser);
    });
};

exports.update = function(req, res) {
  res.json("NOT IMPLEMENTED: Visualization update PUT");
};

exports.delete = function(req, res) {
  res.json("NOT IMPLEMENTED: Visualization delete DELETE");
};
