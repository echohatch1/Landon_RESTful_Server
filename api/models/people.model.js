'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PeopleSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    age: {type: Number, required: false},
    occupation: {type: String, required: false},
});

module.exports = mongoose.model('People', PeopleSchema)