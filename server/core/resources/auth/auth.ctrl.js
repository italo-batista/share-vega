const passport = require("passport");
const _ = require("underscore");
const HttpStatus = require("../../../constants/httpStatus");

exports.login = function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ err: info });
    }

    req.logIn(user, function(err) {
      if (err) {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ err: err, msg: "Could not log in user" });
      }

      res.status(HttpStatus.OK).json(user);
    });
  })(req, res, next);
};

exports.logout = function(req, res) {
  req.logout();
  res.status(HttpStatus.OK).json("Logged out!");
};

exports.status = function(req, res) {
  let user = req.user;
  if (user) {
    user = _.omit(user.toJSON(), "password");
    res.status(HttpStatus.OK).json({ user: user, status: true });
  } else {
    res.status(HttpStatus.OK).json({ status: false });
  }
};
