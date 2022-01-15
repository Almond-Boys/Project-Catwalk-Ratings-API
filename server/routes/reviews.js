const express = require('express');

const controllers = require('../controllers/controllers');

const Router = express.Router();

Router.get('/', controllers.getReviews);

Router.post('/', (req, res) => {
  res.send('POST handler for /reviews route');
});

module.exports = Router;
