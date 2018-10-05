/**
 * @swagger
 * resourcePath: /api/visualization
 * description: All about API
 */

/**
 * Imports.
 */

const express = require("express");
const router = express.Router();

const visController = require("./vis.ctrl");

/**
 * @swagger
 * path: /visualization
 * operations:
 *   -  httpMethod: GET
 *      summary: Display list of all Visualizations.
 *      responseClass: Visualization
 *      nickname: index-visualizations
 */
router.get("/", visController.index);

router.get("/:visualization_id", visController.show);

/**
 * @swagger
 * path: /visualization
 * operations:
 *   -  httpMethod: POST
 *      summary: Handle Visualization create on POST.
 *      responseClass: Visualization
 *      nickname: show-visualization
 */
router.post("/", visController.create);

router.put("/:visualization_id", visController.update);

router.delete("/:visualization_id", visController.delete);

/**
 * Module exports.
 */

module.exports = router;
