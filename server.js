var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/products.model'), //created model loading here
  bodyParser = require('body-parser');

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://echohatch1:dbpassword@crudserver-d95jz.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/products.routes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('Products RESTful API server started on: ' + port);

