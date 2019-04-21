const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/products.model'), //created Product model loading here
  bodyParser = require('body-parser');

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://echohatch1:dbpassword@crudserver-d95jz.mongodb.net/test?retryWrites=true', 
{ useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const productRoute = require('./api/routes/products.routes'); //importing route
productRoute(app); //register the route

app.get('/', (req, res) => {
  res.send("<h1>Welcome to my products API</h1>")
});

/*app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.listen(port);


console.log('Products RESTful API server started on: ' + port);

