const mongoose = require('mongoose');

const reviewsSchema = mongoose.Schema({
  _id: Number,
  rating: Number,
  date: Date,
  summary: String,
  body: String,
  recommend: Boolean,
  reported: Boolean,
  reviewer_name: String,
  reviewer_email: String,
  response: String,
  helpfulness: Number,
  photos: [{
    id: Number,
    url: String,
  }],
  ratings: Number,
  characteristics: [{
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
  }],
});
