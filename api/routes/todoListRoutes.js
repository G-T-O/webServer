'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/products')
    .get(todoList.list_all_products)
    .post(todoList.create_a_product);


  app.route('/products/:productId')
    .get(todoList.read_a_product)
    .put(todoList.update_a_product)
    .delete(todoList.delete_a_product);
};