const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongodbPassword = process.env.MONGO_PASSWORD;
  mongoose = require('mongoose'),
  Product = require('./api/models/products.model'), //created Product model loading here
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://echohatch1:${process.env.MONGODB_PASSWORD}@cluster0.lgu6nng.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');

const productRoute = require('./api/routes/products.routes'); //importing route
productRoute(app); //register the route


app.get('/', (req, res) => {
  res.send("<h1>Welcome to my products API</h1>")
});



app.listen(port);


console.log('Products RESTful API server started on: ' + port);

