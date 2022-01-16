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
};
