const express = require("express");
const consign = require("consign");

// Defining constants.
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
const PORT = process.env.PORT || 3000;

// Settings.
const app = express();

consign()
  .include("./server/config/main-config.js")
  .then("./server/config/cors.js")
  .then("./server/config/swagger-doc.js")
  .then("./server/config/bodyparser.js")
  .then("./server/config/logger.js")
  .then("./server/config/session.js")
  .then("./server/core/router.js")
  .into(app);

/**
 * Startup our app at http://localhost:3000
 */

app.listen(PORT);

console.log("Magic happens on port " + PORT);

exports = module.exports = app;
