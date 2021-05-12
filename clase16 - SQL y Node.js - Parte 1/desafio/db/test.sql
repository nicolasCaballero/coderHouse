DROP DATABASE IF EXISTS test;
CREATE DATABASE test;

USE test;

CREATE table items (
	name varchar(255) NOT NULL ,
	category varchar(255) NOT NULL,
	stock INT UNSIGNED,
	id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(id)
);

INSERT INTO items (name, category, stock) values 
('Fideos','Harina',20), ('Leche', 'Lácteos', 30), ('Crema', 'Lácteos', 15); 

SELECT * FROM items;

DELETE FROM items WHERE id = 1;

UPDATE items SET stock = 45 WHERE id = 2;