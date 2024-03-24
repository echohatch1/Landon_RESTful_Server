'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Products');

exports.list_all_products = async function(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving products");
  }
};

exports.create_a_product = async function(req, res) {
  try {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(400).send(err); // Change error status code for client-side handling
  }
};

exports.read_a_product = async function(req, res) {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving product");
  }
};

exports.read_a_product_name = async function(req, res) {
  try {
    const product = await Product.findOne({ name: req.params.productName });
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving product");
  }
};

exports.update_a_product = async function(req, res) {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.productId },
      req.body,
      { new: true }
    );
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error(err);
    res.status(400).send(err); // Change error status code for client-side handling
  }
};

exports.delete_a_product = async function(req, res) {
  try {
    const result = await Product.deleteOne({ _id: req.params.productId });
    if (result.deletedCount > 0) {
      res.json({ message: "Product successfully deleted" });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting product");
  }
};