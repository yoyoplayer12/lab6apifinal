//require express
const express = require("express");
//create new router
const router = express.Router();

//import controller
const scoreController = require("../../../controllers/api/v1/scores");

router.get("/", scoreController.index);
router.post("/", scoreController.create);

module.exports = router;
