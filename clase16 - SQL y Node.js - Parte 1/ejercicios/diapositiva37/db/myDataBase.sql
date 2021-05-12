DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

USE users;

CREATE TABLE `mydatabase`.`users` (
  `name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `age` INT UNSIGNED NULL,
  `email` VARCHAR(45) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

INSERT INTO users (name, lastname, age, email) values 
('Juan ','Perez',23, 'jp@gmail.com'), ('Pedro','Mei',21, 'pm@gmail.com'), ('Juana','Suarez',25, 'js@gmail.com'); 

SELECT * FROM users;

DELETE FROM users WHERE id = 2;

UPDATE users SET age = 24 WHERE id = 1;