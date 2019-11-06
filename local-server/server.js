const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors({ origin: true }));
const routes = require('./routes');
app.use('/', routes);

/**
 * middleware to log requests
 * @param  {[type]}   req  request
 * @param  {[type]}   res  response
 * @param  {Function} next callback
 * @return {[type]}
 */
const requestTime = function(req, res, next) {
  req.requestTime = Date.now();
  console.log('method ' + req.method + ' and url ' + req.url);
  console.log('request came across at ' + req.requestTime);
  console.log('request body is ' + JSON.stringify(req.body));
  next();
};
app.use(requestTime);

app.listen(1122, () => {
  console.log('App listening on port 1122');
});
