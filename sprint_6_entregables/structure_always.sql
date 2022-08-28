-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


USE `undergames_db` ;

-- -----------------------------------------------------
-- Table `undergames_db`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`category` (
  `id_category` INT AUTO_INCREMENT NOT NULL,
  `category` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_category`))
ENGINE = InnoDB
COMMENT = 'Para guardar Categorias de Juegos';


-- -----------------------------------------------------
-- Table `undergames_db`.`game_group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`game_group` (
  `id_game_group` INT AUTO_INCREMENT NOT NULL,
  `game_group` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_game_group`))
ENGINE = InnoDB
COMMENT = 'Indica a qué grupo pertenece el juego:\n- New Releases\n- Top Sellers\n- Free	';


-- -----------------------------------------------------
-- Table `undergames_db`.`platforms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`platforms` (
  `id_platforms` INT AUTO_INCREMENT NOT NULL,
  `platform_descr` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_platforms`))
ENGINE = InnoDB
COMMENT = 'Para indicar las plataformas donde se pueden jugar los juegos';


-- -----------------------------------------------------
-- Table `undergames_db`.`os_min`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`os_min` (
  `id_os_min` INT AUTO_INCREMENT NOT NULL,
  `os_min` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_os_min`))
ENGINE = InnoDB
COMMENT = 'Caraterísticas minimas de Sistema Operativo requeridas por el juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`os_rec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`os_rec` (
  `id_os_rec` INT AUTO_INCREMENT NOT NULL,
  `os_rec` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_os_rec`))
ENGINE = InnoDB
COMMENT = 'Caraterísticas Recomendadas de Sistema Operativo requeridas por el juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`processor_min`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`processor_min` (
  `id_processor_min` INT AUTO_INCREMENT NOT NULL,
  `processor_min` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_processor_min`))
ENGINE = InnoDB
COMMENT = 'Caraterísticas minimas de Processor requeridas por el juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`processor_rec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`processor_rec` (
  `id_processor_rec` INT AUTO_INCREMENT NOT NULL,
  `processor_rec` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_processor_rec`))
ENGINE = InnoDB
COMMENT = 'Caraterísticas recomendadas de Processor  requeridas por el juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`storage_min`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`storage_min` (
  `id_storage_min` INT AUTO_INCREMENT NOT NULL,
  `storage_min` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_storage_min`))
ENGINE = InnoDB
COMMENT = 'Caraterísticas minimas de Almacenamiento requeridas por el juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`storage_rec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`storage_rec` (
  `id_storage_rec` INT AUTO_INCREMENT NOT NULL,
  `storage_rec` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_storage_rec`))
ENGINE = InnoDB
COMMENT = 'Caraterísticas recomendadas de Almacenamiento  requeridas por el juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`graphics_min`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`graphics_min` (
  `id_graphics_min` INT AUTO_INCREMENT NOT NULL,
  `graphics_min` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_graphics_min`))
ENGINE = InnoDB
COMMENT = 'Caraterísticas minimas de Graphics  requeridas por el juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`graphics_rec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`graphics_rec` (
  `id_graphics_rec` INT AUTO_INCREMENT NOT NULL,
  `graphics_rec` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_graphics_rec`))
ENGINE = InnoDB
COMMENT = 'Caraterísticas Recomendadas de Graphics  requeridas por el juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`creators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`creators` (
  `id_creators` INT AUTO_INCREMENT NOT NULL,
  `nickname` VARCHAR(60) NOT NULL,
  `dribble` VARCHAR(60) NULL,
  `twitter` VARCHAR(60) NULL,
  `linkedin` VARCHAR(60) NULL,
  `facebook` VARCHAR(60) NULL,
  `creator_avatar` VARCHAR(100) NULL,
  PRIMARY KEY (`id_creators`))
ENGINE = InnoDB
COMMENT = 'Para guardar la info y detalle de los creadores de los juegos';


-- -----------------------------------------------------
-- Table `undergames_db`.`games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`games` (
  `id_game` INT AUTO_INCREMENT NOT NULL,
  `oldImage1` VARCHAR(200) NULL,
  `oldImage2` VARCHAR(200) NULL,
  `oldImage3` VARCHAR(200) NULL,
  `oldImage4` VARCHAR(200) NULL,
  `oldImage5` VARCHAR(200) NULL,
  `title` VARCHAR(100) NOT NULL,
  `one_word_descr` VARCHAR(60) NULL,
  `short_descr` VARCHAR(100) NULL,
  `long_descr` VARCHAR(300) NULL,
  `original_price` DECIMAL(15,2) NULL,
  `price_w_discount` DECIMAL(15,2) NULL,
  `discount` INT NULL,
  `video_1` VARCHAR(200) NULL,
  `miniatura` VARCHAR(200) NULL,
  `launch_date` DATE NULL,
  `img_1` VARCHAR(200) NULL,
  `img_2` VARCHAR(200) NULL,
  `img_3` VARCHAR(200) NULL,
  `img_4` VARCHAR(200) NULL,
  `img_5` VARCHAR(200) NULL,
  `id_category` INT NULL,
  `id_game_group` INT NULL,
  `id_platforms` INT NULL,
  `id_os_min` INT NULL,
  `id_os_rec` INT NULL,
  `id_processor_min` INT NULL,
  `id_processor_rec` INT NULL,
  `id_storage_min` INT NULL,
  `id_storage_rec` INT NULL,
  `id_graphics_min` INT NULL,
  `id_graphics_rec` INT NULL,
  `id_creators` INT NULL,
  PRIMARY KEY (`id_game`),
  INDEX `fk_games_category1_idx` (`id_category` ASC) ,
  INDEX `fk_games_game_group1_idx` (`id_game_group` ASC) ,
  INDEX `fk_games_platforms1_idx` (`id_platforms` ASC) ,
  INDEX `fk_games_os_min1_idx` (`id_os_min` ASC) ,
  INDEX `fk_games_os_rec1_idx` (`id_os_rec` ASC) ,
  INDEX `fk_games_processor_min1_idx` (`id_processor_min` ASC) ,
  INDEX `fk_games_processor_rec1_idx` (`id_processor_rec` ASC) ,
  INDEX `fk_games_storage_min1_idx` (`id_storage_min` ASC) ,
  INDEX `fk_games_storage_rec1_idx` (`id_storage_rec` ASC) ,
  INDEX `fk_games_graphics_min1_idx` (`id_graphics_min` ASC) ,
  INDEX `fk_games_graphics_rec1_idx` (`id_graphics_rec` ASC) ,
  INDEX `fk_games_creators1_idx` (`id_creators` ASC) ,
  CONSTRAINT `fk_games_category1`
    FOREIGN KEY (`id_category`)
    REFERENCES `undergames_db`.`category` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_game_group1`
    FOREIGN KEY (`id_game_group`)
    REFERENCES `undergames_db`.`game_group` (`id_game_group`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_platforms1`
    FOREIGN KEY (`id_platforms`)
    REFERENCES `undergames_db`.`platforms` (`id_platforms`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_os_min1`
    FOREIGN KEY (`id_os_min`)
    REFERENCES `undergames_db`.`os_min` (`id_os_min`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_os_rec1`
    FOREIGN KEY (`id_os_rec`)
    REFERENCES `undergames_db`.`os_rec` (`id_os_rec`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_processor_min1`
    FOREIGN KEY (`id_processor_min`)
    REFERENCES `undergames_db`.`processor_min` (`id_processor_min`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_processor_rec1`
    FOREIGN KEY (`id_processor_rec`)
    REFERENCES `undergames_db`.`processor_rec` (`id_processor_rec`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_storage_min1`
    FOREIGN KEY (`id_storage_min`)
    REFERENCES `undergames_db`.`storage_min` (`id_storage_min`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_storage_rec1`
    FOREIGN KEY (`id_storage_rec`)
    REFERENCES `undergames_db`.`storage_rec` (`id_storage_rec`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_graphics_min1`
    FOREIGN KEY (`id_graphics_min`)
    REFERENCES `undergames_db`.`graphics_min` (`id_graphics_min`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_graphics_rec1`
    FOREIGN KEY (`id_graphics_rec`)
    REFERENCES `undergames_db`.`graphics_rec` (`id_graphics_rec`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_creators1`
    FOREIGN KEY (`id_creators`)
    REFERENCES `undergames_db`.`creators` (`id_creators`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Detalle de cada juego';


-- -----------------------------------------------------
-- Table `undergames_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`users` (
  `id_users` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `surname` VARCHAR(200) NULL,
  `email` VARCHAR(200) NOT NULL,
  `gamertag` VARCHAR(200) NULL,
  `password` VARCHAR(200) NULL,
  `repeted_password` VARCHAR(200) NULL,
  `tos` TINYINT NULL,
  `avatar` VARCHAR(200) NULL,
  PRIMARY KEY (`id_users`))
ENGINE = InnoDB
COMMENT = 'Detalle de usuarios';


-- -----------------------------------------------------
-- Table `undergames_db`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `undergames_db`.`cart` (
  `id_cart` INT AUTO_INCREMENT NOT NULL,
  `id_users` INT NOT NULL,
  `id_game` INT NOT NULL,
  `total` DECIMAL NULL,
  `created_at` DATE NULL,
  PRIMARY KEY (`id_cart`, `id_users`, `id_game`),
  INDEX `fk_cart_users1_idx` (`id_users` ASC) ,
  INDEX `fk_cart_games1_idx` (`id_game` ASC) ,
  CONSTRAINT `fk_cart_users1`
    FOREIGN KEY (`id_users`)
    REFERENCES `undergames_db`.`users` (`id_users`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_games1`
    FOREIGN KEY (`id_game`)
    REFERENCES `undergames_db`.`games` (`id_game`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
