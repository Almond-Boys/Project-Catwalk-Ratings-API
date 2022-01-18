# Project-Catwalk-Ratings-API

Building out a API server for the reviews&ratings module of a previous Front-End-Project at Hackreactor.


MongoDB notes:
Command to import a csv file into MongoDB:

mongoimport --db [dbName] --type=csv --headerline --file [filepath]
 // --headerline will take the first row as names.

Aggregation pipeline queries:
- Joining Photos into reviews:
  - Create index on the foreignField first, or aggregation will run forever:
db.reviews_photos.createIndex({review_id: 1})
db.reviews.aggregate([
  {
    $lookup: {
      from: 'reviews_photos',
      localField: 'id',
      foreignField: 'review_id',
      as: 'photos'
    }
  },
  {
    $addFields: {
      "photos": "$photos"
    }
  },
  {
    $project: {
      id: 1,
      product_id: 1,
      rating: 1,
      date: 1,
      summary: 1,
      body: 1,
      recommend: 1,
      reported: 1,
      reviewer_name: 1,
      reviewer_email: 1,
      response: 1,
      helpfulness: 1,
      photos: 1,
    }
  },
   {
    $out: "reviews"
  }
])

- Joining characteristic_reviews and characteristics:
  - Create index on the foreignField first, or aggregation will run forever:

db.characteristics.createIndex({id: 1})
db.characteristic_reviews.aggregate([
  {
    $lookup: {
      from: 'characteristics',
      localField: 'characteristic_id',
      foreignField: 'id',
      as: 'name'
    }
  },
  {
    $unwind: '$name'
  },
  {
    $addFields: {
      "name": "$name.name",
      "product_id": "$name.product_id"
    }
  },
  {
    $project: {
      review_id: 1,
      name: 1,
      value: 1,
    }
  },
  {
    $out: "characteristic_reviews"
  }
])

- Join characteristics_reviews into reviews
  - Create index on the foreignField first, or aggregation will run forever:
db.characteristic_reviews.createIndex({review_id: 1})
db.reviews.aggregate([
  {
    $lookup: {
      from: 'characteristic_reviews',
      localField: 'id',
      foreignField: 'review_id',
      as: 'characteristics'
    }
  },
  {
    $addFields: {
      "characteristics": "$characteristics"
    }
  },
  {
    $project: {
      id: 1,
      product_id: 1,
      rating: 1,
      date: 1,
      summary: 1,
      body: 1,
      recommend: 1,
      reported: 1,
      reviewer_name: 1,
      reviewer_email: 1,
      response: 1,
      helpfulness: 1,
      photos: 1,
      characteristics: 1
    }
  },
  {
    $out: "reviews"
  }
])

