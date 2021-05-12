DROP DATABASE IF EXISTS test;
CREATE DATABASE test;

USE test;

CREATE TABLE `mydatabase`.`users` (
  `name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `age` INT UNSIGNED NULL,
  `email` VARCHAR(45) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

INSERT INTO users (name, lastname, age, email) values 
('Juan ','Perez',23, 'jp@gmail.com'), ('Pedro','Mei',21, 'pm@gmail.com'), ('Juana','Suarez',25, 'js@gmail.com'); 

SELECT * FROM items;

DELETE FROM items WHERE id = 1;

UPDATE items SET stock = 45 WHERE id = 2;