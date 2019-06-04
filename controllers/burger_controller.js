var express = require('express');

var router = express.Router();

// var Burger = require("../models/burger.js");

var db = require("../models");

// GET PUT POST Routes


router.get("/", function (req, res) {
  console.log("I made i here.")
  
  db.burger.findAll({}).then(function(burgers) {
    res.render("index", { burgers: burgers });
  });
});

router.post("/api/burgers", function (req, res) {
  db.burger.create({
    burger_name: req.body.name
  })
    .then(function() {
      return res.redirect("/");
  });
});

router.put("/api/burgers/:id", function (req, res) {


  db.burger.update(
    {
     devoured: req.body.devoured
    },
    {
     where: {
       id: req.params.id
     }
    }).then(function(result) {
console.log("pu result" + result);
      res.json(result);
    });
});






module.exports = router;