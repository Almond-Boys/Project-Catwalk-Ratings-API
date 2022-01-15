const database = require('../../database/database');

module.exports = {
  getReviews: (callback) => {
    database.reviews.findOne({ id: 4 }, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },
};
