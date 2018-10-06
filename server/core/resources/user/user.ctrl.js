const UserStoreClient = require("./user.store.client");
const HttpStatus = require("../../../constants/httpStatus");

exports.show = function(req, res) {
  UserStoreClient.findUserById(req.params.user_id)
    .catch(error => {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    })
    .then(fic => {
      res.status(HttpStatus.OK).json(fic);
    });
};

exports.create = function(req, res) {
  UserStoreClient.createUser(req.body)
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
  UserStoreClient.deleteUser(req.params.user_id)
    .catch(error => {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    })
    .then(deletedUser => {
      res.status(HttpStatus.OK).json(deletedUser);
    });
};
