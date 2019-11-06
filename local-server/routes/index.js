const routes = require('express').Router();
const goods = require('./goods');
const users = require('./users');
const orders = require('./orders');

// orders
routes.use('/orders', orders);

// goods
routes.use('/goods', goods);

// users
routes.use('/users', users);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
