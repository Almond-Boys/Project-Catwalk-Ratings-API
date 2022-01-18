const express = require('express');

const controllers = require('../controllers/controllers');

const Router = express.Router();

Router.get('/', controllers.getReviews);
Router.get('/meta', controllers.getMeta);
Router.post('/', controllers.postReview);
Router.put('/:review_id/helpful', controllers.reviewHelpful);
Router.put('/:review_id/report', controllers.reportReview);

module.exports = Router;
