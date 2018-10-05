/**
 * @swagger
 * resourcePath: /api/user
 * description: All about API for User
 */

const express = require("express");
const router = express.Router();

const userController = require("./user.ctrl");

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

module.exports = router;
