const mongoose = require('mongoose');

const reviewsSchema = mongoose.Schema({
  _id: Number,
  rating: {
    type: Number,
    min: [1, 'Invalid Input'],
    max: [5, 'Invalid Input'],
  },
  date: Date,
  summary: {
    type: String,
    minLength: 0,
    maxLength: 60,
  },
  body: {
    type: String,
    minLength: 50,
    maxLength: 1000,
  },
  recommend: Boolean,
  reported: Boolean,
  reviewer_name: {
    type: String,
    minLength: 0,
    maxLength: 50,
  },
  reviewer_email: {
    type: String,
    minLength: 0,
    maxLength: 50,
  },
  response: {
    type: String,
    minLength: 50,
    maxLength: 1000,
  },
  helpfulness: Number,
  photos: [{
    id: Number,
    url: String,
  }],
  ratings: Number,
  characteristics: {
    Size: {
      id: Number,
      value: Number,
    },
    Width: {
      id: Number,
      value: Number,
    },
    Comfort: {
      id: Number,
      value: Number,
    },
    Quality: {
      id: Number,
      value: Number,
    },
    Length: {
      id: Number,
      value: Number,
    },
    Fit: {
      id: Number,
      value: Number,
    },
  },
});

const productSchema = mongoose.Schema({
  product_id: Number,
  reviews: [reviewsSchema],
});

module.exports = {
  productSchema,
};
