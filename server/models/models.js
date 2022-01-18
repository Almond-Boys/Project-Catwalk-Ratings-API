/* eslint-disable no-restricted-syntax */
const database = require('../../database/database');

module.exports = {
  getReviews: (inputProductID, callback) => {
    const productID = parseInt(inputProductID.product_id, 10);
    database.reviews.find({ product_id: productID }).toArray((err, results) => {
      if (err) throw err;
      const data = {
        product: productID,
        page: 0,
        count: results.length,
        results,
      };
      callback(data);
    });
  },
  getMeta: (inputProductID, callback) => {
    const productID = parseInt(inputProductID.product_id, 10);
    database.reviews.find({ product_id: productID }).toArray((err, results) => {
      if (err) throw err;
      const metaDataObj = {
        product_id: productID,
        ratings: {
        },
        recommended: {
          0: 0,
          1: 0,
        },
        characteristics: {

        },
      };
      results.forEach((review) => {
        if (metaDataObj.ratings[review.rating] === undefined) {
          metaDataObj.ratings[review.rating] = 1;
        } else {
          metaDataObj.ratings[review.rating] += 1;
        }
        if (review.recommend === 'true') {
          metaDataObj.recommended['1'] += 1;
        } else {
          metaDataObj.recommended['0'] += 1;
        }
        review.characteristics.forEach((characteristic) => {
          if (metaDataObj.characteristics[characteristic.name] === undefined) {
            metaDataObj.characteristics[characteristic.name] = {
              value: characteristic.value,
              // eslint-disable-next-line no-underscore-dangle
              id: characteristic._id,
            };
          } else {
            metaDataObj.characteristics[characteristic.name].value += characteristic.value;
          }
        });
      });
      const innerCharObj = metaDataObj.characteristics;
      // eslint-disable-next-line guard-for-in
      for (const key in metaDataObj.characteristics) {
        innerCharObj[key].value /= results.length;
      }
      callback(null, metaDataObj);
    });
  },
  reviewHelpful: (inputObject, callback) => {
    const reviewID = parseInt(inputObject.review_id, 10);
    database.reviews.updateOne({ id: reviewID }, { $inc: { helpfulness: 1 } });
    callback(null, 'Success');
  },
  reportReview: (inputObject, callback) => {
    const reviewID = parseInt(inputObject.review_id, 10);
    database.reviews.updateOne({ id: reviewID }, { $set: { reported: true } });
    callback(null, 'Success');
  },
};
