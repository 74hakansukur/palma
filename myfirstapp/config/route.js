var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../comps/Main');
var Home = require('../comps/Home');
var ForecastContainer = require('../container/ForecastContainer');

var routes = ( 
  <Router>
   <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='/forecast/:city' component={ForecastContainer} />
   </Route>
  </Router>
);
module.exports = routes;
