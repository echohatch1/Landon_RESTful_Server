'use strict';
module.exports = function(app) {
  const products = require('../controllers/products.controller');

  // Products Routes
  app.route('/products')
    .get(products.list_all_products)
    .post(products.create_a_product);


  app.route('/products/id/:productId')
    .get(products.read_a_product)
    .put(products.update_a_product)
    .delete(products.delete_a_product);

  app.route('/products/name/:productName')
    .get(products.read_a_product_name)
};