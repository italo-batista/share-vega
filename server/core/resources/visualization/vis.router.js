/**
 * @swagger
 * resourcePath: /api/visualization
 * description: Visualization operations
 */

const express = require("express");
const router = express.Router();

const visController = require("./vis.ctrl");

/**
 * @swagger
 * path: /api/visualization
 * operations:
 *   -  httpMethod: GET
 *      summary: Display list of all Visualizations.
 *      responseClass: Visualization
 *      nickname: index-visualizations
 */
router.get("/", visController.index);

/**
 * @swagger
 * path: /api/visualization/{visualization_id}
 * operations:
 *   -  httpMethod: GET
 *      summary: Display details for a specific Visualization.
 *      responseClass: Visualization
 *      nickname: get-visualization
 *      parameters:
 *        - name: visualization_id
 *          description: Id of visualization.
 *          paramType: path
 *          required: true
 *          dataType: string
 */
router.get("/:visualization_id", visController.show);

/**
 * @swagger
 * path: /api/visualization
 * operations:
 *   -  httpMethod: POST
 *      summary: Post a new Visualization
 *      notes: Returns new Visualization
 *      responseClass: Visualization
 *      nickname: post-visualizations
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: creator
 *          description: User who wrote vis
 *          paramType: body
 *          required: true
 *          dataType: ObjectId
 *        - name: gist_link
 *          description: Url for vis in gist
 *          paramType: body
 *          required: true
 *          dataType: string
 */
router.post("/", visController.create);

/**
 * @swagger
 * path: /api/visualization
 * operations:
 *   -  httpMethod: PUT
 *      summary: Post a new Visualization
 *      notes: Returns new Visualization
 *      responseClass: Visualization
 *      nickname: put-visualizations
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: creator
 *          description: User who wrote vis
 *          paramType: body
 *          required: false
 *          dataType: ObjectId
 *        - name: gist_link
 *          description: Url for vis in gist
 *          paramType: body
 *          required: false
 *          dataType: string
 */
router.put("/:visualization_id", visController.update);

/**
 * @swagger
 * path: /api/visualization/{visualization_id}
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Delete some Visualization.
 *      responseClass: Visualization
 *      nickname: delete-visualization
 *      parameters:
 *        - name: visualization_id
 *          description: Id of visualization to delete
 *          paramType: path
 *          required: true
 *          dataType: ObjectId
 */
router.delete("/:visualization_id", visController.delete);

module.exports = router;

/**
 * @swagger
 * models:
 *   Visualization:
 *     id: Visualization
 *     properties:
 *       creator:
 *         type: ObjectId
 *         required: true
 *       gist_link:
 *         type: String
 *         required: true
 *       dateCreated:
 *         type: Date
 *       dateLastUpdate:
 *         type: Date
 *       forkedBy:
 *         type: Array
 * */
