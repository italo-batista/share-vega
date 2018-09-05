/**
 * Application server.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 08/2018
 */

/**
 * Imports.
 */

var express = require("express");
const bodyParser = require('body-parser');

var app = express();

/**
 * Defining constants.
 */

var PORT = process.env.PORT || 3000;
var ENV = process.env.ENVIROMENT || "development";

/**
 * Settings.
 */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json');
  next();
});

app.post('/', function (req, res) {
  // Returning to client in request response the body request sent for him.
  res.end(JSON.stringify(req.body, null, 2))
});

/**
 * Api routes.
 */

var visualizationRoutes = require("./api/routes/visualization");
app.use("/visualization", visualizationRoutes);

/**
 * Startup our app at http://localhost:3000
 */

app.listen(PORT);

console.log("Magic happens on port " + PORT);

/**
 * Module exports.
 */

exports = module.exports = app;
