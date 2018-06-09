-- MySQL dump 10.13  Distrib 8.0.11, for macos10.13 (x86_64)
--
-- Host: localhost    Database: eqsAuction
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `category` int(4) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `address1` varchar(50) DEFAULT NULL,
  `mobile` varchar(13) NOT NULL,
  `city` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `zipcode` varchar(12) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `address2` varchar(50) DEFAULT NULL,
  `address3` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'$2a$10$W7NY/tHakcyjXHeZH/JIFuAgSPnpgynxlaWKZ7pEYY2vsenN13ji.',1,'user1@gmail.com','N 715\r\nhostel 10 IIT Bombay','1111111111','Lohit','Arunachal Pradesh','India','400076','user1',NULL,NULL),(3,'$2a$10$pt8GvAttorEU.ZvCkV3Yl.I8Po0ZKd2bL4H23aaJiy9VuvHyG9Pgm',1,'user3@email.com','add1','3333333333','city1','state1','India','123456','user3',NULL,NULL),(5,'$2a$10$9I.BCJNSVIIrrL3UPRojJeTzQX8XxR0q3IfV/Qb6EnD692/mOzNzW',1,'user5@email.com','add1','5555555555','city1','state1','India','1111111','user2',NULL,NULL),(7,'$2a$10$pXbr/NotH4.o32kjHpYTCu22yJaZgzAMGL18v1e6mHKBhTPvcH11y',0,'admin1@email.com','add1','000000000','city1','state1','India','1111111','admin1',NULL,NULL),(8,'$2a$10$iji.zoTI43zzTspvliaqMO3i9NbQYfdsUr6Z25GstwITnTalWg6bG',1,'shr@email.com','59 Shiv Vilas Palace Rajwada Indore, Rajwada','1234567890','INDORE','Madhya Pradesh','India','452004','Shrut Jain',NULL,NULL),(9,'$2a$10$CTWoUsCMx5sQd50o8LXTfOXMfvfSR9/cDWUPQdjKnL1c.6xaULOdq',0,'admin2@email.com',NULL,'0987654321',NULL,NULL,NULL,NULL,'admin2',NULL,NULL),(10,'$2a$10$lMHgnswWJqkTdQUp0K.6verjKBcDh73wn31OD01p5s1dd.oLdb2ty',1,'gvghj','njk','5677687','jn','jbhj','bnjn','7878','vhv',NULL,NULL),(11,'$2a$10$ULcxnEgYK28urAPohRrpSemVM/gfIiXO4clbuRF40x9g7sBHcF6fa',1,'hvbhjb','bhjbk','87989','bhjb','hbhjb','bhjbk','7897','jhjk',NULL,NULL),(12,'$2a$10$wdOQfEw552hUFiLn839hN.fZ26pEDcuo0IGN20WwJbDjS8rpvAXka',1,'gvh@njn','hvgh','78789','vhv','gvghv','gvgh','879','bjkb',NULL,NULL),(13,'$2a$10$9bQjeTuPkRX35hFnsMPWiuYNc7dojJF0YkY5D0vOQ2p5.12wb/NlK',1,'vgvgh@bhjb','hbhj','87','vhv','vbhv','vhjvg','789','bhjb',NULL,NULL),(14,'$2a$10$ZTGVk0bkOY53fLNluUSkZ.9o5uY5xB5I14o/sp5kS/wvuNXjUtG9e',1,'ghvgh@hjb.com','ghvghv','8798','vhjv','vhjv','vhgv','687','gyhh',NULL,NULL),(15,'$2a$10$I2ZjN.Ag.RV7iqrhxnicCOvjzhbGsFw9dgArEwEHQh88r7eTudUhi',1,'gvg@bjhbj.com','vgyvg','7887','vghv','vghvh','vgvh','778','hv ghv',NULL,NULL),(16,'$2a$10$X0du1zIvWMu32A.OS.LB6e7E00OUWcR4hiiJc0SSrcDkcI4koZ1x6',1,'fgvg@bhjbj','bv ghv','7868','vghvghv','vghgvghv','vghvhgv','789789','gcgh',NULL,NULL),(17,'$2a$10$cIL5MMdwRXHG1rqFpI/9seXpcWlSIT7ap0N22hmJVIOqIbeF3nWda',1,'gvghv@hjbjb.com','vghgvgh','76786','vghv','vghv','vhgvh','7897','gvghv',NULL,NULL),(18,'$2a$10$QRqDNZFbIVcg0Dps3zQ9vu0WQt53pliL4StcxbJAa9w8ZU/9QnHeC',1212121212,NULL,NULL,'1',NULL,NULL,NULL,NULL,'aaaaakash',NULL,NULL),(19,'$2a$10$k.BhT4peWTqzfFUR8tggGe9csSD1f78194YfVhxl5CqkQUtaftCG2',1212,NULL,NULL,'1',NULL,NULL,NULL,NULL,'aaaaakash',NULL,NULL),(20,'$2a$10$rhuBOipoXJSCmLtBs7qJB.HXvCo/75SzSNIaWu7cg5j4I.MQ2bgcO',1212121212,NULL,NULL,'1',NULL,NULL,NULL,NULL,'aaaaakash',NULL,NULL),(21,'$2a$10$CwINMtX5KU7Tv26NaQc/tOxngJzQtKANWkrLPpwbQSLM7H.lQ1Vb6',1212121212,NULL,NULL,'1',NULL,NULL,NULL,NULL,'aaaaakash',NULL,NULL),(22,'$2a$10$XrJoB7lUCpVux3YeTIk8..w8o.53jDu.lm5lOsaOz5mP9yVtw5Uci',1212121212,NULL,NULL,'1',NULL,NULL,NULL,NULL,'aaaaakash',NULL,NULL),(23,'$2a$10$RmDCXTIBE5DJc89HXs83G.6DFAZSgkBKPDEwbV8z9ndBW5RdEk0ay',1,NULL,NULL,'1212121212',NULL,NULL,NULL,NULL,'aaaaakash',NULL,NULL),(24,'$2a$10$eBHPyrHDFnasbX2TzfOIEunyZ7MtNQv8TyezIc6gLt4CP/SVIGeQq',1,NULL,NULL,'9878987678',NULL,NULL,NULL,NULL,'userr',NULL,NULL),(25,'$2a$10$wcKKH4Vs2Rtq.e/FOeuJCu3BbIQM538XK3azZi991g9su9S/p0NpS',1,NULL,NULL,'9876757878',NULL,NULL,NULL,NULL,'userr',NULL,NULL),(26,'$2a$10$NfQN166yhQQJRUo6qeE07.ruC4FKeyBsCQFdwINQYrIR5ZKyLOdLm',1,NULL,NULL,'9876789876',NULL,NULL,NULL,NULL,'userr',NULL,NULL),(27,'$2a$10$jLk/uIGe3O2wEsv8S.NmuORQjF9yroywRQl3Q38k8I/3ixzgNXTQG',1,NULL,NULL,'2343212345',NULL,NULL,NULL,NULL,'userr',NULL,NULL),(28,'$2a$10$mKn5LiuS0H8HDD0vaRFrvuWoUu88OWMIpBNgzOOjboeWJuKDCChi6',1,NULL,NULL,'9876545678',NULL,NULL,NULL,NULL,'userr',NULL,NULL),(29,'$2a$10$XebHkKgAPv3m8n6E/pvJiesVE7svpU13HYnVDr1f0.652Z.wwGCMK',1,NULL,NULL,'1234567898',NULL,NULL,NULL,NULL,'aaaaakash',NULL,NULL),(30,NULL,1,NULL,NULL,'3456',NULL,NULL,NULL,NULL,'Company Inc',NULL,NULL),(31,'$2a$10$DLzZXhQGEIje6nHUA16qsuaeh6i7Y/xtPVlPityWePWtVA./HzbMi',1,'shr@email.com','59 Shiv Vilas Palace','7878787867','Alirajpur','Madhya Pradesh','India','452004','my name','Rajwada','');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `admin` (
  `id` int(5) DEFAULT NULL,
  `location` int(5) DEFAULT NULL,
  `boss_id` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `all_equipment`
--

DROP TABLE IF EXISTS `all_equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `all_equipment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(20) DEFAULT NULL,
  `model` varchar(20) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `colour` varchar(15) DEFAULT NULL,
  `km` int(11) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `expected_price` int(8) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `available` int(1) DEFAULT NULL,
  `photo1` varchar(100) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `photo4` varchar(15) DEFAULT NULL,
  `photo3` varchar(15) DEFAULT NULL,
  `photo2` varchar(15) DEFAULT NULL,
  `doc1` varchar(15) DEFAULT NULL,
  `doc2` varchar(15) DEFAULT NULL,
  `type_id` int(5) DEFAULT NULL,
  `doc3` varchar(15) DEFAULT NULL,
  `doc4` varchar(15) DEFAULT NULL,
  `doc5` varchar(15) DEFAULT NULL,
  `doc6` varchar(15) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `subcategory` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `all_equipment`
--

LOCK TABLES `all_equipment` WRITE;
/*!40000 ALTER TABLE `all_equipment` DISABLE KEYS */;
INSERT INTO `all_equipment` VALUES (41,'Hyundai','&*(YHUBhj',89789789,'hubyiubhub',7890789,'Alirajpur',87897,'gvgbhubninhiuh',31,1,'1_1.png','Madhya Pradesh','1_4.png','1_3.png','1_2.png','1_1.png','1_2.png',25,'','','','','Earth moving Equipment','Excavators'),(42,'b2','m2',789908,'cfgcvgyvhjv',897987,'Alirajpur',78789,'gvgyvuygbuyh',31,1,'42_1.png','Madhya Pradesh','42_4.png','42_3.png','42_2.png','42_1.png','42_2.png',18,'','','','','2','2'),(43,'b1','m2',8789790,'8ygyugyugugh',7867,'Alirajpur',7897,'gyuguyhiuhil',31,1,'43_1.png','Madhya Pradesh','43_4.png','43_3.png','43_2.png','43_1.png','43_2.png',12,'','','','','1','2');
/*!40000 ALTER TABLE `all_equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emails`
--

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `emails` (
  `email` varchar(60) DEFAULT NULL,
  `date` varchar(10) DEFAULT NULL,
  `resolved` int(1) DEFAULT NULL,
  `sno` int(6) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
INSERT INTO `emails` VALUES ('user1@email.com','01/06/2018',0,1),('user1@email.com','01/06/2018',0,2),('fghvhj','01/06/2018',0,3),('admin2@email.com','01/06/2018',0,4),('admin2@email.com','07/06/2018',0,5),('admin1@email.com','07/06/2018',0,6),('admin2@email.com','07/06/2018',0,7);
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment_type`
--

DROP TABLE IF EXISTS `equipment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `equipment_type` (
  `type_id` int(5) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  `model` varchar(20) DEFAULT NULL,
  `mapping_unit` varchar(20) DEFAULT NULL,
  `max_dig_depth` varchar(20) DEFAULT NULL,
  `engine_power` varchar(20) DEFAULT NULL,
  `loader_capacity` varchar(20) DEFAULT NULL,
  `showel_capacity` varchar(20) DEFAULT NULL,
  `backhoe_bucket_capacity` varchar(20) DEFAULT NULL,
  `weight` varchar(20) DEFAULT NULL,
  `blade_capacity` varchar(20) DEFAULT NULL,
  `doc1` varchar(7) DEFAULT NULL,
  `doc2` varchar(7) DEFAULT NULL,
  `subcategory` varchar(50) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment_type`
--

LOCK TABLES `equipment_type` WRITE;
/*!40000 ALTER TABLE `equipment_type` DISABLE KEYS */;
INSERT INTO `equipment_type` VALUES (7,'2','m1',NULL,'24','1000cc','10t','34',NULL,'20t','67',NULL,NULL,'4','b1'),(8,'2','m2',NULL,'24','1000cc','10t','34',NULL,'2t','67',NULL,NULL,'4','b1'),(10,'2','m2',NULL,'24','1000cc','10t','34',NULL,'2t','gfghj',NULL,NULL,'4','b1'),(11,'2','m2',NULL,'24','1000cc','10t','dbhjbvhj',NULL,'2t','gfghj',NULL,NULL,'2','b1'),(12,'1','m2',NULL,'24','1000cc','10t','34',NULL,'2t','gfghj',NULL,NULL,'2','b1'),(13,'1','m2',NULL,'24','1000cc','10t','34',NULL,'2t','23',NULL,NULL,'1','b1'),(14,'1','m2',NULL,'24','1000cc','10t','34',NULL,'28kg','23',NULL,NULL,'1','b1'),(15,'1','m2',NULL,'24','1000cc','10t','34',NULL,'28kg','2m',NULL,NULL,'2','b2'),(16,'1','m2',NULL,'24','1000cc','10t','34',NULL,'28','2m',NULL,NULL,'3','b2'),(17,'1','m2',NULL,'24','1000cc','10t','34gfdg',NULL,'28','2m',NULL,NULL,'2','b2'),(18,'2','m2',NULL,'24','1000cc','10t','34gfdg',NULL,'28gfh','2m',NULL,NULL,'2','b2'),(19,'Earth moving Equipment','H234','','78','56787','678','8797','789','15t','67578','','','Backhoes','HITACHI'),(20,'Earth moving Equipment','H687','','5m','789hp','7897','78','78kg','7t','GUYG','','','Backhoes','HITACHI'),(21,'Earth moving Equipment','T89H','','hvbhjk','bvhjb','hbhjb','hbhjb','bhjb','bhj','bnmb ','','','Backhoes','TATA'),(22,'Earth moving Equipment','T7879J','','678','9898','gyu','guyg87','gy','gg','8','','','Backhoes','TATA'),(23,'Earth moving Equipment','B8789','','gyug','hgh','b76t7','8h','78tgiy','hvt','fyb','','','Excavators','Caterpilar'),(24,'Earth moving Equipment','Vhjhk','','76y78','hy7g','ubyg','8u','byug','8ub','yug','','','Excavators','Caterpilar'),(25,'Earth moving Equipment','&*(YHUBhj','','gbyugiub','hbhloj','yugvyuvb','hub8998','9089yuyg','byug78','8h78uh','','','Excavators','Hyundai'),(26,'Earth moving Equipment','C7897','','789yhub','u78guy','guguygbo','gyg87','890890','78tyg','7y89yhg','','','Excavators','Hyundai'),(27,'Concrete Pumps','H234','','78','56787','678','8797','789','15t','67578','','','Mini Mobile Batching Plant','HITACHI'),(28,'Concrete Pumps','H687','','5m','789hp','7897','78','78kg','7t','GUYG','','','Mini Mobile Batching Plant','HITACHI'),(29,'Concrete Pumps','T89H','','hvbhjk','bvhjb','hbhjb','hbhjb','bhjb','bhj','bnmb ','','','Mini Mobile Batching Plant','TATA'),(30,'Concrete Pumps','T7879J','','678','9898','gyu','guyg87','gy','gg','8','','','Mini Mobile Batching Plant','TATA'),(31,'Concrete Pumps','B8789','','gyug','hgh','b76t7','8h','78tgiy','hvt','fyb','','','Static Batching Plant','Caterpilar'),(32,'Concrete Pumps','Vhjhk','','76y78','hy7g','ubyg','8u','byug','8ub','yug','','','Static Batching Plant','Caterpilar'),(33,'Concrete Pumps','&*(YHUBhj','','gbyugiub','hbhloj','yugvyuvb','hub8998','9089yuyg','byug78','8h78uh','','','Static Batching Plant','Hyundai'),(34,'Concrete Pumps','C7897','','789yhub','u78guy','guguygbo','gyg87','890890','78tyg','7y89yhg','','','Static Batching Plant','Hyundai');
/*!40000 ALTER TABLE `equipment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `featured`
--

DROP TABLE IF EXISTS `featured`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `featured` (
  `equip_id` int(11) NOT NULL,
  `display` int(1) NOT NULL,
  `start_date` varchar(10) DEFAULT NULL,
  `end_date` varchar(10) DEFAULT NULL,
  `views` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `featured`
--

LOCK TABLES `featured` WRITE;
/*!40000 ALTER TABLE `featured` DISABLE KEYS */;
INSERT INTO `featured` VALUES (41,1,'07/06/2018',NULL,0),(42,1,'07/06/2018',NULL,0),(43,1,'07/06/2018',NULL,0);
/*!40000 ALTER TABLE `featured` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `requests` (
  `equip_id` int(11) DEFAULT NULL,
  `applicant_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
INSERT INTO `requests` VALUES (2,3),(7,3),(8,3),(8,3),(8,3),(8,3),(8,3),(8,3),(9,3),(6,3),(11,1),(20,3),(8,3),(NULL,3),(NULL,3),(NULL,3),(NULL,3),(38,3);
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `views`
--

DROP TABLE IF EXISTS `views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `views` (
  `equip_id` int(11) DEFAULT NULL,
  `viewer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `views`
--

LOCK TABLES `views` WRITE;
/*!40000 ALTER TABLE `views` DISABLE KEYS */;
INSERT INTO `views` VALUES (1,3),(2,3),(7,3),(8,3),(9,3),(8,3),(9,3),(7,3),(8,3),(7,3),(7,3),(7,3),(6,3),(2,7),(6,7),(1,1),(11,1),(6,1),(20,3),(25,1),(38,3);
/*!40000 ALTER TABLE `views` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-07 17:53:22
