CREATE TABLE artist (
  id SERIAL NOT NULL PRIMARY KEY,
  name_artist VARCHAR,
  address VARCHAR,
  category VARCHAR
);

--

CREATE TABLE album (
  name_artist_id INTEGER REFERENCES name_artist(id),
  name_alb VARCHAR,
);
--
CREATE TABLE track (
  id SERIAL NOT NULL PRIMARY KEY,
  name_alb_id INTEGER REFERENCES album(name_alb),
  number_s VARCHAR,
  review VARCHAR,

);
--
CREATE TABLE song (
  id SERIAL NOT NULL PRIMARY KEY,
  number_id INTEGER REFERENCES track(number_s),
  review VARCHAR,
  title VARCHAR,
);
--
CREATE TABLE songWriter (
  title_id INTEGER REFERENCES song(title),
  review VARCHAR,
  band VARCHAR,
);
