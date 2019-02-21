'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductsSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: {type: Number, required: true},
    desc: {type: String, required: true},
});

module.exports = mongoose.model('Products', ProductsSchema)