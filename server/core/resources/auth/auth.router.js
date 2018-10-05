const express = require("express");
const router = express.Router();

const authController = require("./auth.ctrl");

router.get("/", authController.status);

router.post("/", authController.login);

router.delete("/", authController.logout);

module.exports = router;
