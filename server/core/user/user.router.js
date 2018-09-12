/**
 * User API router module.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */

/**
 * @swagger
 * resourcePath: /api/user
 * description: All about API for User
 */

/**
 * Imports.
 */

var express = require("express");
var router = express.Router();

var userController = require("./user.ctrl");

router.get("/:user_id", userController.show);

/**
 * @swagger
 * path: /user
 * operations:
 *   -  httpMethod: POST
 *      summary: Handle User create on POST.
 *      responseClass: User
 *      nickname: show-user
 */
router.post("/", userController.create);

router.put("/:user_id", userController.update);

router.delete("/:user_id", userController.delete);

/**
 * Module exports.
 */

module.exports = router;
