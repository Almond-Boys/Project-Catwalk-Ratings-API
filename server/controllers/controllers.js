const models = require('../models/models');

module.exports = {
  getReviews: (req, res) => {
    models.getReviews(req.query, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  },
  getMeta: (req, res) => {
    models.getMeta(req.query, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  },
  reviewHelpful: (req, res) => {
    models.reviewHelpful(req.params, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.status(204).send(results);
      }
    });
  },
  reportReview: (req, res) => {
    models.reportReview(req.params, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.status(204).send(results);
      }
    });
  },
};
