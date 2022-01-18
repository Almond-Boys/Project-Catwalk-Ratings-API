const models = require('../models/models');

module.exports = {
  getReviews: (req, res) => {
    models.getReviews(req.query, (err, reviewData) => {
      if (err) {
        res.send(err);
      } else {
        res.send(reviewData);
      }
    });
  },
  getMeta: (req, res) => {
    models.getMeta(req.query, (err, metaData) => {
      if (err) {
        res.send(err);
      } else {
        res.send(metaData);
      }
    });
  },
  postReview: (req, res) => {
    models.postReview(req.body, (err, successMsg) => {
      if (err) {
        res.send(err);
      } else {
        res.status(201).send(successMsg);
      }
    });
  },
  reviewHelpful: (req, res) => {
    models.reviewHelpful(req.params, (err, successMsg) => {
      if (err) {
        res.send(err);
      } else {
        res.status(204).send(successMsg);
      }
    });
  },
  reportReview: (req, res) => {
    models.reportReview(req.params, (err, successMsg) => {
      if (err) {
        res.send(err);
      } else {
        res.status(204).send(successMsg);
      }
    });
  },
};
