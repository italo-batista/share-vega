// Cross-Origin Resource Sharing

const cors = require("cors");

module.exports = app => {
  let corsOptions = {};
  if (process.env.NODE_ENV === "production") {
    corsOptions = {
      origin: "http://0.0.0.0:3000",
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
  }
  app.use(cors(corsOptions));
};
