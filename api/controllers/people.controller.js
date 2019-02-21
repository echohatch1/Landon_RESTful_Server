'use strict';


const mongoose = require('mongoose'),
  People = mongoose.model('People');

exports.list_all_people = function(req, res) {
  People.find({}, function(err, people) {
    if (err)
      res.send(err);
    res.json(people);
  });
};



exports.create_a_person = function(req, res) {
  let new_people = new People(req.body);
  new_people.save(function(err, people) {
    if (err)
      res.send(err);
    res.json(people);
  });
};


exports.read_a_person = function(req, res) {
    People.findById( req.params.peopleId, function(err, people) {
    if (err)
      res.send(err);
    res.json(people);
  });
};



exports.update_a_person = function(req, res) {
    People.findOneAndUpdate({_id: req.params.peopleId}, req.body, {new: true}, function(err, people) {
    if (err)
      res.send(err);
    res.json(people);
  });
};


exports.delete_a_person = function(req, res) {


    People.remove({
    _id: req.params.peopleId
  }, function(err, people) {
    if (err)
      res.send(err);
    res.json({ message: 'Person successfully deleted' });
  });
};