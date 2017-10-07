CREATE TABLE restaurant (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  address VARCHAR,
  category VARCHAR
);

--

CREATE TABLE reviewer (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR ,
  karma INTEGER CHECK(karma >= 0 AND karma <= 7)
);
--
CREATE TABLE review (
  id SERIAL NOT NULL PRIMARY KEY,
  reviewer_id INTEGER REFERENCES review(id),
  stars INTEGER CHECK(stars >= 1 AND stars <= 5),
  title VARCHAR,
  review VARCHAR,
  restaurant_id INTERGER REFERENCES restaurant(id)

);
--
