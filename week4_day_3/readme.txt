Restaurant DB V2

Table

For version 2 of the restaurant database, you will have the following tables:

restaurant
reviewer
review
A reviewer could write any number of reviews for any number of restaurants.

The restaurant table has these columns:

id
name
address
category
The reviewer table would have these columns:

id
name
email
karma - between 0 to 7 (please use a constraint)
The review table would have these columns:

id
reviewer id (please use a foreign key constraint)
stars - 1 to 5 stars (please use a constraint)
title
review - the text of the review
restaurant id (please use a foreighn key constraint)
Create Schema

Create these table schemas by writing CREATE statements in a .sql file and loading them in using something like psql restaurant -f restaurant.sql (this command assumes your database is called restaurant and your file is restaurant.sql).

Enter Data

Enter some data for restaurants by either writing insert statements or through the Postico UI.

Answer These Questions With a Query

List all the reviews for a given restaurant given a specific restaurant ID.
List all the reviews for a given restaurant, given a specific restaurant name.
List all the reviews for a given reviewer, given a specific author name.
List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.
Get the average stars by restaurant. The result should have the restaurant name and its average star rating.
Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.
List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.
Get the average stars given by each reviewer. (reviewer name, average star rating)
Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)
Get the number of restaurants in each category. (category name, restaurant count)
Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
Get the average star rating for a food category. (category name, average star rating)
