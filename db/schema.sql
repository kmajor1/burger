CREATE DATABASE burgers_db;

USE burgers_db; 

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`));


