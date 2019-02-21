'use strict';
module.exports = function(app) {
  const people = require('../controllers/people.controller');

  // People Routes
  app.route('/people')
    .get(people.list_all_people)
    .post(people.create_a_person);


  app.route('/people/:peopleId')
    .get(people.read_a_person)
    .put(people.update_a_person)
    .delete(people.delete_a_person);
};