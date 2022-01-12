DROP DATABASE IF EXISTS reviewsAPI;

CREATE DATABASE reviewsAPI;

USE reviewsAPI;

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL UNIQUE AUTO_INCREMENT,
  product_id INTEGER,
  rating INTEGER,
  date BIGINT,
  summary VARCHAR,
  body VARCHAR,
  recommend BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR,
  reviewer_email VARCHAR,
  response VARCHAR,
  helpfulness INTEGER
);

CREATE TABLE photos (
  id BIGSERIAL NOT NULL UNIQUE,
  review_id INTEGER,
  url VARCHAR
);

CREATE TABLE characteristics (
  id BIGSERIAL NOT NULL UNIQUE,
  product_id INTEGER,
  name VARCHAR
);

CREATE TABLE review_characteristics (
  id BIGSERIAL NOT NULL UNIQUE,
  review_id INTEGER,
  characteristic_id INTEGER,
  value INTEGER
);

ALTER TABLE photos ADD FOREIGN KEY (review_id) REFERENCES reviews(id);
ALTER TABLE review_characteristics ADD FOREIGN KEY (review_id) REFERENCES reviews(id;
ALTER TABLE review_characteristics ADD FOREIGN KEY (characteristic_id) REFERENCES characteristics(id);
