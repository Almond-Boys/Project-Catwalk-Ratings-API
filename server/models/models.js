const database = require('../../database/database');

module.exports = {
  getReviews: (params, callback) => {
    const productID = parseInt(params.product_id, 10);
    database.reviews.findOne({ product_id: productID }, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },
};
