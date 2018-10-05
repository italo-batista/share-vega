const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const rfs = require("rotating-file-stream");

const LOG_DIRECTORY = path.join("./", "logs");

module.exports = app => {
  fs.existsSync(LOG_DIRECTORY) || fs.mkdirSync(LOG_DIRECTORY);
  const logStream = rfs("share-vega.log", {
    size: "10M", // rotate every 10 MegaBytes written
    compress: "gzip", // compress rotated files,
    path: LOG_DIRECTORY
  });
  app.use(morgan("dev"));
  app.use(morgan("common", { stream: logStream }));
};
