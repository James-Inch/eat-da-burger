DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

-- Create the table task. 
CREATE TABLE burgers
(
id INT(10) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(45) NOT NULL, 
devoured BOOLEAN NOT NULL DEFAULT 0,
PRIMARY KEY (id)
);
