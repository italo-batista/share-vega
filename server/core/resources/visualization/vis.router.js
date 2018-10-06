const express = require("express");
const router = express.Router();

const visController = require("./vis.ctrl");

router.get("/", visController.index);

router.get("/:visualization_id", visController.show);

router.post("/", visController.create);

router.put("/:visualization_id", visController.update);

router.delete("/:visualization_id", visController.delete);

module.exports = router;
