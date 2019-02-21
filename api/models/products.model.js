'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductsSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: {type: Number, required: false},
    desc: {type: String, required: false},
});

module.exports = mongoose.model('Products', ProductsSchema)