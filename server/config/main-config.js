const configDB = require("./db");
const mongoose = require("mongoose");

module.exports = app => {
  let mongoUri = configDB.getMongoUri();
  let mongooseOpts = configDB.mongooseOpts;
  mongoose.connect(
    mongoUri,
    mongooseOpts
  );
  mongoose.set("useCreateIndex", true);
};
