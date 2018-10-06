/**
 * @swagger
 * resourcePath: /api/user
 * description: User operations
 */

const express = require("express");
const router = express.Router();

const userController = require("./user.ctrl");

/**
 * @swagger
 * path: /api/user/{user_id}
 * operations:
 *   -  httpMethod: GET
 *      summary: Display details for a specific User.
 *      responseClass: User
 *      nickname: get-user
 *      parameters:
 *        - name: user_id
 *          description: Id of user.
 *          paramType: path
 *          required: true
 *          dataType: string
 */
router.get("/:user_id", userController.show);

/**
 * @swagger
 * path: /api/user
 * operations:
 *   -  httpMethod: POST
 *      summary: Post a new User
 *      notes: Returns new User
 *      responseClass: User
 *      nickname: post-user
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: name
 *          description: Name for User
 *          paramType: body
 *          required: true
 *          dataType: string
 *        - name: username
 *          description: Username for User
 *          paramType: body
 *          required: true
 *          dataType: string
 *        - name: email
 *          description: Email for User
 *          paramType: body
 *          required: true
 *          dataType: ObjectId
 *        - name: password
 *          description: Secret for user auth
 *          paramType: body
 *          required: true
 *          dataType: string
 */
router.post("/", userController.create);

/**
 * @swagger
 * path: /api/user
 * operations:
 *   -  httpMethod: PUT
 *      summary: Post a new User
 *      notes: Returns new User
 *      responseClass: User
 *      nickname: post-user
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: name
 *          description: Name for User
 *          paramType: body
 *          required: false
 *          dataType: string
 *        - name: username
 *          description: Username for User
 *          paramType: body
 *          required: false
 *          dataType: string
 *        - name: email
 *          description: Email for User
 *          paramType: body
 *          required: false
 *          dataType: ObjectId
 *        - name: password
 *          description: Secret for user auth
 *          paramType: body
 *          required: false
 *          dataType: string
 */
router.put("/:user_id", userController.update);

/**
 * @swagger
 * path: /api/user/{user_id}
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Delete some User.
 *      responseClass: User
 *      nickname: delete-user
 *      parameters:
 *        - name: user_id
 *          description: Id of user to delete.
 *          paramType: path
 *          required: true
 *          dataType: string
 */
router.delete("/:user_id", userController.delete);

module.exports = router;

/**
 * @swagger
 * models:
 *   User:
 *     id: User
 *     properties:
 *       name:
 *         type: string
 *         required: true
 *       username:
 *         type: String
 *         required: true
 *       email:
 *         type: string
 *         required: true
 *       password:
 *         type: string
 *         required: true
 *       gender:
 *         type: string
 *       description:
 *         type: string
 * */
