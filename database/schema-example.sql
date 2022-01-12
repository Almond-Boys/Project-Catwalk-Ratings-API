DROP DATABASE IF EXISTS reviewsAPI;

CREATE DATABASE reviewsAPI;

USE reviewsAPI;

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL UNIQUE AUTO_INCREMENT,
  product_id INTEGER,
  rating INTEGER CONSTRAINT valid_rating CHECK (rating > 0 AND rating < 6),
  date date,
  summary VARCHAR(60),
  body VARCHAR(1000),
  recommend BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR(50),
  reviewer_email VARCHAR(50),
  response VARCHAR(1000),
  helpfulness BIGSERIAL NULL
);

CREATE TABLE photos (
  id BIGSERIAL NOT NULL UNIQUE,
  review_id INTEGER,
  url VARCHAR
);

CREATE TABLE characteristics (
  id BIGSERIAL NOT NULL UNIQUE,
  product_id INTEGER,
  characteristics_name VARCHAR(100)
);

CREATE TABLE review_characteristics (
  id BIGSERIAL NOT NULL UNIQUE,
  review_id INTEGER,
  characteristic_id INTEGER,
  characteristics_rating INTEGER CONSTRAINT valid_characteristics_rating CHECK (characteristics_rating > 0 AND rating < 6)
);

ALTER TABLE photos ADD FOREIGN KEY (review_id) REFERENCES reviews(id);
ALTER TABLE review_characteristics ADD FOREIGN KEY (review_id) REFERENCES reviews(id);
ALTER TABLE review_characteristics ADD FOREIGN KEY (characteristic_id) REFERENCES characteristics(id);
