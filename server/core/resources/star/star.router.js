
const express = require("express");
const router = express.Router();

const starController = require("./star.ctrl");

router.post("/", starController.create);

router.delete("/", starController.delete);

module.exports = router;
