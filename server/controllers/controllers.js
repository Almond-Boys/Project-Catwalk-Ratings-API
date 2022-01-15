const models = require('../models/models');

module.exports = {
  getReviews: (req, res) => {
    models.getReviews((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  },
};
