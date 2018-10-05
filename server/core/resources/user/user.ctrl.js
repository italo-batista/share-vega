/**
 * Controller for user.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */

const User = require("./user.model");
const HttpStatus = require("../../../constants/httpStatus");

exports.show = function(req, res) {
  User.findById(req.params.user_id)
  .catch(err => {
    res.status(HttpStatus.BAD_REQUEST).send(err);
  })
  .then(user => {
    res.status(HttpStatus.OK).json(user);
  });
};

exports.create = function(req, res) {
  let user = new User(req.body);
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
  User.findById(req.params.user_id)
  .catch(err => {
    res.status(HttpStatus.BAD_REQUEST).send(err);
  })
  .then(user => {
    if (req.body.name) user.name = req.body.name;
    if (req.body.username) user.username = req.body.username;
    if (req.body.email) user.email = req.body.email;
    if (req.body.gender) user.gender = req.body.gender;
    if (req.body.description) user.description = req.body.description;
    
    user
      .save()
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err);
      })
      .then(updatedUser => {
        res.status(HttpStatus.OK).json(updatedUser);
      });
  });
};

exports.delete = function(req, res) {
  res.json("NOT IMPLEMENTED: Visualization delete DELETE");
};
