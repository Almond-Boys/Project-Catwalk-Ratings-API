const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'reviews';

const connect = async () => {
  await client.connect();
};

connect()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to DB');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });

const db = client.db(dbName);
const reviews = db.collection('reviews');
const counters = db.collection('counters');

module.exports = {
  reviews,
  db,
  counters,
};
