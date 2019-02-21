'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PlacesSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    address: {type: String, required: false},
    city: {type: String, required: false},
    state: {type: String, required: false},
});

module.exports = mongoose.model('Places', PlacesSchema)