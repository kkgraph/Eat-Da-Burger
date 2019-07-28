-- create DATABASE burgers_db;
-- For development
-- USE burgers_db;
-- From https://fresca-burgers.herokuapp.com/
-- USE un33jcqv3cnjgsif;

CREATE TABLE burgers
(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name varchar(125) NOT NULL,
  devoured BOOLEAN DEFAULT false
)