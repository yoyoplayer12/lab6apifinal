// //require express
// const express = require("express");
// //create new router
// const router = express.Router();

// //import controller
// const scoreController = require("../../../old/controllers/api/v1/scores");

// router.get("/", scoreController.index);
// router.post("/", scoreController.create);


// module.exports = router;
// used to be Scores.js

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
