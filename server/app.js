/**
 * Application server.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */

/**
 * Imports.
 */

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const rfs = require("rotating-file-stream");
const endpoint = require("./constants/endpoint");
const swagger = require("swagger-express");

const app = express();

/**
 * Defining constants.
 */

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENVIROMENT || "development";
const LOG_DIRECTORY = path.join("./", "logs");
const STATIC_FILES_DIRECTORY = path.join("./", "static");

/**
 * Settings.
 */

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// API documentation UI
app.use(
  swagger.init(app, {
    apiVersion: "1.0",
    swaggerVersion: "1.0",
    basePath: "http://localhost:3000",
    swaggerURL: "/docs/api",
    swaggerJSON: "/api-docs.json",
    swaggerUI: "./docs-ui/swagger/",
    apis: ["./server/core/visualization/vis.route.js"]
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Content-Type", "application/json");
  next();
});
app.post("/", function(req, res) {
  // Returning to client in request response the body request sent for him.
  res.end(JSON.stringify(req.body, null, 2));
});

// Logging in file
fs.existsSync(LOG_DIRECTORY) || fs.mkdirSync(LOG_DIRECTORY);
const logStream = rfs("share-vega.log", {
  size: "10M", // rotate every 10 MegaBytes written
  compress: "gzip", // compress rotated files,
  path: LOG_DIRECTORY
});
app.use(morgan("dev"));
app.use(morgan("common", { stream: logStream }));

/**
 * Api routes.
 */

// Serving static files
app.use("/static", express.static(STATIC_FILES_DIRECTORY));

const visualizationRoutes = require("./core/visualization/vis.route");
app.use(endpoint.VISUALIZATION, visualizationRoutes);

/**
 * Startup our app at http://localhost:3000
 */

app.listen(PORT);

console.log("Magic happens on port " + PORT);

exports = module.exports = app;
