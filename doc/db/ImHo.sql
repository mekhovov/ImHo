SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
CREATE SCHEMA IF NOT EXISTS `ImHo_dev` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `mydb` ;
USE `ImHo_dev` ;

-- -----------------------------------------------------
-- Table `ImHo_dev`.`comments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ImHo_dev`.`comments` ;

CREATE  TABLE IF NOT EXISTS `ImHo_dev`.`comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT ,
  `comment` TEXT CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `attach_id` INT(11) NULL DEFAULT NULL ,
  `user_id` INT(11) NULL DEFAULT NULL ,
  `created_at` DATETIME NULL DEFAULT NULL ,
  `updated_at` DATETIME NULL DEFAULT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `index_comments_on_attach_id` (`attach_id` ASC) ,
  INDEX `index_comments_on_user_id` (`user_id` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `ImHo_dev`.`attaches`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ImHo_dev`.`attaches` ;

CREATE  TABLE IF NOT EXISTS `ImHo_dev`.`attaches` (
  `id` INT(11) NOT NULL AUTO_INCREMENT ,
  `user_id` INT(11) NULL DEFAULT NULL ,
  `photo_file_name` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `photo_content_type` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `photo_file_size` INT(11) NULL DEFAULT NULL ,
  `created_at` DATETIME NULL DEFAULT NULL ,
  `updated_at` DATE NULL DEFAULT NULL ,
  `comments_id` INT(11) NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_attaches_comments1` (`comments_id` ASC) ,
  CONSTRAINT `fk_attaches_comments1`
    FOREIGN KEY (`comments_id` )
    REFERENCES `ImHo_dev`.`comments` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 68
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `ImHo_dev`.`likes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ImHo_dev`.`likes` ;

CREATE  TABLE IF NOT EXISTS `ImHo_dev`.`likes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT ,
  `user_id` INT(11) NULL DEFAULT NULL ,
  `attach_id` INT(11) NULL DEFAULT NULL ,
  `attaches_id` INT(11) NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_likes_attaches1` (`attaches_id` ASC) ,
  CONSTRAINT `fk_likes_attaches1`
    FOREIGN KEY (`attaches_id` )
    REFERENCES `ImHo_dev`.`attaches` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `ImHo_dev`.`rails_admin_histories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ImHo_dev`.`rails_admin_histories` ;

CREATE  TABLE IF NOT EXISTS `ImHo_dev`.`rails_admin_histories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT ,
  `message` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `username` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `item` INT(11) NULL DEFAULT NULL ,
  `table` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `month` SMALLINT(6) NULL DEFAULT NULL ,
  `year` BIGINT(20) NULL DEFAULT NULL ,
  `created_at` DATETIME NULL DEFAULT NULL ,
  `updated_at` DATETIME NULL DEFAULT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `index_histories_on_item_and_table_and_month_and_year` (`item` ASC, `table` ASC, `month` ASC, `year` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `ImHo_dev`.`schema_migrations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ImHo_dev`.`schema_migrations` ;

CREATE  TABLE IF NOT EXISTS `ImHo_dev`.`schema_migrations` (
  `version` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL ,
  UNIQUE INDEX `unique_schema_migrations` (`version` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `ImHo_dev`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ImHo_dev`.`users` ;

CREATE  TABLE IF NOT EXISTS `ImHo_dev`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT ,
  `email` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL DEFAULT '' ,
  `encrypted_password` VARCHAR(128) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL DEFAULT '' ,
  `reset_password_token` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `remember_created_at` DATETIME NULL DEFAULT NULL ,
  `sign_in_count` INT(11) NULL DEFAULT '0' ,
  `current_sign_in_at` DATETIME NULL DEFAULT NULL ,
  `last_sign_in_at` DATETIME NULL DEFAULT NULL ,
  `current_sign_in_ip` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `last_sign_in_ip` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `confirmation_token` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `confirmed_at` DATETIME NULL DEFAULT NULL ,
  `confirmation_sent_at` DATETIME NULL DEFAULT NULL ,
  `created_at` DATETIME NULL DEFAULT NULL ,
  `updated_at` DATETIME NULL DEFAULT NULL ,
  `name` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `avatar_file_name` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `avatar_content_type` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL ,
  `avatar_file_size` INT(11) NULL DEFAULT NULL ,
  `avatar_updated_at` DATETIME NULL DEFAULT NULL ,
  `attaches_id` INT(11) NOT NULL ,
  `likes_id` INT(11) NOT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `index_users_on_email` (`email` ASC) ,
  UNIQUE INDEX `index_users_on_reset_password_token` (`reset_password_token` ASC) ,
  UNIQUE INDEX `index_users_on_confirmation_token` (`confirmation_token` ASC) ,
  INDEX `fk_users_attaches` (`attaches_id` ASC) ,
  INDEX `fk_users_likes1` (`likes_id` ASC) ,
  CONSTRAINT `fk_users_attaches`
    FOREIGN KEY (`attaches_id` )
    REFERENCES `ImHo_dev`.`attaches` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_likes1`
    FOREIGN KEY (`likes_id` )
    REFERENCES `ImHo_dev`.`likes` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
