var express = require('express');
var router = express.Router();
var Pet = require('../models/pet');


//returns all the animals in the DB
router.get('/', function (req, res) {
  Pet.find({}, function (err, animals) {

    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(animals);
  });
});

//adds a new animal to the DB
router.post('/', function (req, res) {
  var pets = new Pet(req.body);
  pets.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

//delets an animal from the DB
router.delete('/:id', function (req, res) {
  Pet.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
