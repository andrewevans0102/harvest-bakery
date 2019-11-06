const users = require('express').Router();
const all = require('./all');
const create = require('./create');
const login = require('./login');
const logout = require('./logout');

// retrieve all the users
// in future could create another route with a specific id
users.get('/', all);

// create a user
users.post('/', create);

// login user
users.post('/login', login);

// logout user
users.get('/logout', logout);

module.exports = users;
