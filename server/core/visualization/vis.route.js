/**
 * Visualization API router module.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */

/**
 * @swagger
 * resourcePath: /api/visualization
 * description: All about API
 */

/**
 * Imports.
 */

var express = require("express");
var router = express.Router();

var visuController = require("./vis.ctrl");

/**
 * @swagger
 * path: /visualization
 * operations:
 *   -  httpMethod: GET
 *      summary: Display list of all Visualizations.
 *      responseClass: Visualization
 *      nickname: index visualizations
 */
router.get("/", visuController.index);

router.get("/:visualization_id", visuController.show);

/**
 * @swagger
 * path: /visualization
 * operations:
 *   -  httpMethod: POST
 *      summary: Handle Visualization create on POST.
 *      responseClass: Visualization
 *      nickname: show visualization
 */
router.post("/", visuController.create);

router.put("/:visualization_id", visuController.update);

router.delete("/:visualization_id", visuController.delete);

/**
 * Module exports.
 */

module.exports = router;
