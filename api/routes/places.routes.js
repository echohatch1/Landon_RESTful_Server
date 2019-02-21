'use strict';
module.exports = function(app) {
  const places = require('../controllers/places.controller');

  // Places Routes
  app.route('/places')
    .get(places.list_all_places)
    .post(places.create_a_place);


  app.route('/places/:placeId')
    .get(places.read_a_place)
    .put(places.update_a_place)
    .delete(places.delete_a_place);
};