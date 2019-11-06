const orders = require('express').Router();
const all = require('./all');
const single = require('./single');

// retrieve all the orders
orders.get('/', all);

// retrieve orders for a specific owner
orders.get('/owner/:ownerId', single.byOwner);

// retreive order by id
orders.get('/id/:orderId', single.byId);

// create order
orders.post('/', single.createOrder);

// delete specific order
orders.delete('/:orderId', single.deleteOrder);

module.exports = orders;
