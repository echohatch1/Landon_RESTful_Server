const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/products.model'), //created Product model loading here
  People = require('./api/models/people.model'), //created People model loading here
  Place = require('./api/models/places.model'), //created Place model loading here
  bodyParser = require('body-parser');

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://echohatch1:dbpassword@crudserver-d95jz.mongodb.net/test?retryWrites=true', 
{ useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const productRoute = require('./api/routes/products.routes'); //importing route
productRoute(app); //register the route

const peopleRoute = require('./api/routes/people.routes'); //importing route
peopleRoute(app); //register the route

const placeRoute = require('./api/routes/places.routes'); //importing route
placeRoute(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('Products RESTful API server started on: ' + port);

