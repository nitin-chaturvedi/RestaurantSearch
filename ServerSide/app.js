const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const errorHandler = require('./errorHandler/error-handler');
const jwtAuth = require('./authHelper/jwtSecretAuth');
const routes = require('./controller/routes');
const app = express();

//A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('short'));

// Set Static Folder
app.use(express.static(path.join(__dirname, '../ClientSide/restaurantSearchApp/public/restaurantSearchClient/index.html')));

//middleware for jwt
app.use(jwtAuth.verifyToken);

//application routes
routes(app);

//to run build angular code in the server
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../ClientSide/restaurantSearchApp/public/restaurantSearchClient/index.html'));
// });

// global error handler
app.use(errorHandler);

//get all routes
var route, routesa = [];
app._router.stack.forEach(function (middleware) {
  if (middleware.route) { // routes registered directly on the app
    routesa.push(middleware.route);
  } else if (middleware.name === 'router') { // router middleware 
    middleware.handle.stack.forEach(function (handler) {
      route = handler.route;
      route && routesa.push(route);
    });
  }
});

//print all routes on server start
routesa.forEach(function (temp) {
  var methods = "";
  for (var method in temp.methods) {
    methods += method + ", ";
  }
  console.log(temp.path + ": " + methods);
});

module.exports = app;