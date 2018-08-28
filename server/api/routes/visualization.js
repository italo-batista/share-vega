/**
 * Visualization API router module.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 08/2018
 */

var express = require("express");
var router = express.Router();

var visuController = require("../controllers/visualization");

/**
 * Maps routes to controller functions.
 */

router.get("/", visuController.index);

router.get("/:visualization_id", visuController.show);

router.post("/", visuController.create);

router.put("/:visualization_id", visuController.update);

router.delete("/:visualization_id", visuController.delete);

/**
 * Module exports.
 */

module.exports = router;
