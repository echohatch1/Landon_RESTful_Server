'use strict';


const mongoose = require('mongoose'),
  Place = mongoose.model('Places');

exports.list_all_places = function(req, res) {
  Place.find({}, function(err, place) {
    if (err)
      res.send(err);
    res.json(place);
  });
};



exports.create_a_place = function(req, res) {
  let new_place = new Place(req.body);
  new_place.save(function(err, place) {
    if (err)
      res.send(err);
    res.json(place);
  });
};


exports.read_a_place = function(req, res) {
    Place.findById( req.params.placeId, function(err, place) {
    if (err)
      res.send(err);
    res.json(place);
  });
};



exports.update_a_place = function(req, res) {
    Place.findOneAndUpdate({_id: req.params.placeId}, req.body, {new: true}, function(err, place) {
    if (err)
      res.send(err);
    res.json(place);
  });
};


exports.delete_a_place = function(req, res) {


    Place.remove({
    _id: req.params.placeId
  }, function(err, place) {
    if (err)
      res.send(err);
    res.json({ message: 'Place successfully deleted' });
  });
};