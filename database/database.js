const { MongoClient } = require('mongodb');

const publicDBUrl = 'mongodb://54.215.135.52:27017';
const privateDBUrl = 'mongodb: //172.31.5.105:27017';
const client = new MongoClient(privateDBUrl);

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
