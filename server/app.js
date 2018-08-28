/**
 * Application server.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 08/2018
 */

/**
 * Settings.
 */

var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;
var ENV = process.env.ENVIROMENT || "development";

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
