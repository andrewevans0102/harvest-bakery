const goods = require('express').Router();
const all = require('./all');

// retrieve all the baked goods
// in future could create another route with a specific id
goods.get('/', all);

module.exports = goods;
