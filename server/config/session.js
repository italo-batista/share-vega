const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

const ONE_MINUTE = 60;

module.exports = app => {
  require("./passport")(passport);
  app.use(
    session({
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 30 * ONE_MINUTE
      }),
      secret: process.env.SESSION_SECRET || "share-vega-session-secret",
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
