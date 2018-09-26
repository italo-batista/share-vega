const express = require("express");
const router = express.Router();

const authController = require("./auth.controller");

router.get("/", authController.status);

router.post("/", authController.login);

router.delete("/", authController.logout);

module.exports = router;
