# Project-Catwalk-Ratings-API

Building out a API server for the reviews&ratings module of a previous Front-End-Project at Hackreactor.


MongoDB notes:
Command to import a csv file into MongoDB:

mongoimport --db [dbName] --type=csv --headerline --file [filepath]

--headerline will take the first row as names.

Aggregation pipeline:

$match - filter the documents to pass only the documents that match a specified condition
$lookup - creates a left join between two databases

In order to join characteristics_reviews_samples which contains values and characteristics which contains names, I'm going to use below code to perform a left join between the two collections.

db.characteristic_reviews_sample.aggregate([
  {
    $lookup: {
      from: 'characteristics_sample',
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
      id: 1,
      product_id: 1,
      review_id: 1,
      name: 1,
      value: 1,
    }
  },
  {
    $out: "characteristic_reviews_sample"
  }
])


db.reviews_photos_sample.aggregate([{$group: {review_id}}, {$out: { db: reviews, coll: reviews_sample}}])

$merge or $out - last stage of aggregation, can output aggregation results into an existing collection in db