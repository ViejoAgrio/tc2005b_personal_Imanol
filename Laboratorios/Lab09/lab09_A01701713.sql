-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: Lab09
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `entregan`
--

DROP TABLE IF EXISTS `entregan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entregan` (
  `Fecha` date NOT NULL,
  `Clave` bigint(20) unsigned NOT NULL,
  `Numero` bigint(20) unsigned NOT NULL,
  `RFC` varchar(15) NOT NULL,
  `Cantidad` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`Fecha`),
  KEY `Entregan_materiales_FK` (`Clave`),
  KEY `entregan_proyectos_FK` (`Numero`),
  KEY `entregan_proveedores_FK` (`RFC`),
  CONSTRAINT `Entregan_materiales_FK` FOREIGN KEY (`Clave`) REFERENCES `materiales` (`Clave`),
  CONSTRAINT `entregan_proveedores_FK` FOREIGN KEY (`RFC`) REFERENCES `proveedores` (`RFC`),
  CONSTRAINT `entregan_proyectos_FK` FOREIGN KEY (`Numero`) REFERENCES `proyectos` (`Numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entregan`
--

LOCK TABLES `entregan` WRITE;
/*!40000 ALTER TABLE `entregan` DISABLE KEYS */;
INSERT INTO `entregan` VALUES ('1997-03-09',1270,5008,'DDDD800101',546),('1998-03-01',1090,5010,'BBBB800101',421),('1998-04-02',1170,5017,'BBBB800101',180),('1998-06-06',1090,5010,'BBBB800101',612),('1998-06-11',1340,5016,'CCCC800101',674),('1998-07-02',1140,5005,'GGGG800101',651),('1998-07-04',1420,5002,'CCCC800101',603),('1998-08-01',1290,5009,'FFFF800101',132),('1998-08-05',1250,5010,'BBBB800101',690),('1998-08-07',1380,5012,'GGGG800101',645),('1998-09-01',1430,5007,'DDDD800101',13),('1998-09-04',1030,5016,'DDDD800101',139),('1998-10-12',1330,5013,'BBBB800101',554),('1998-12-03',1120,5007,'EEEE800101',167),('1998-12-06',1330,5017,'BBBB800101',558),('1998-12-09',1190,5019,'DDDD800101',94),('1999-02-08',1350,5015,'DDDD800101',261),('1999-02-09',1430,5003,'DDDD800101',576),('1999-03-12',1070,5012,'HHHH800101',503),('1999-04-02',1020,5017,'CCCC800101',8),('1999-04-03',1150,5015,'HHHH800101',458),('1999-04-06',1050,5014,'FFFF800101',90),('1999-05-06',1350,5015,'DDDD800101',330),('1999-05-11',1210,5001,'FFFF800101',43),('1999-06-05',1130,5006,'FFFF800101',673),('1999-07-01',1290,5006,'FFFF800101',336),('1999-07-03',1050,5014,'FFFF800101',623),('1999-08-03',1230,5012,'HHHH800101',115),('1999-09-02',1030,5003,'DDDD800101',202),('1999-09-05',1350,5015,'DDDD800101',272),('1999-09-08',1260,5009,'CCCC800101',631),('1999-10-02',1340,5016,'CCCC800101',11),('1999-10-03',1270,5007,'DDDD800101',506),('1999-10-05',1260,5006,'CCCC800101',460),('1999-11-02',1070,5007,'HHHH800101',2),('1999-11-12',1040,5004,'EEEE800101',263),('1999-12-11',1170,5018,'BBBB800101',53),('2000-01-04',1070,5012,'HHHH800101',516),('2000-01-08',1090,5009,'BBBB800101',73),('2000-02-01',1060,5013,'GGGG800101',692),('2000-02-08',1420,5008,'CCCC800101',278),('2000-03-02',1280,5007,'EEEE800101',331),('2000-03-05',1010,5001,'BBBB800101',528),('2000-03-08',1310,5019,'HHHH800101',463),('2000-04-02',1190,5016,'DDDD800101',356),('2000-04-05',1060,5006,'GGGG800101',324),('2000-05-02',1410,5001,'BBBB800101',601),('2000-05-11',1030,5016,'DDDD800101',295),('2000-06-05',1200,5015,'EEEE800101',585),('2000-06-08',1100,5009,'CCCC800101',466),('2000-07-11',1360,5016,'EEEE800101',364),('2000-08-04',1370,5013,'FFFF800101',575),('2000-09-02',1110,5008,'DDDD800101',292),('2000-10-06',1040,5015,'EEEE800101',546),('2000-10-07',1060,5013,'GGGG800101',47),('2000-10-11',1010,5018,'BBBB800101',667),('2000-11-08',1330,5017,'BBBB800101',93),('2000-12-02',1370,5017,'FFFF800101',44),('2001-01-02',1380,5012,'GGGG800101',147),('2001-01-06',1180,5017,'CCCC800101',216),('2001-02-09',1140,5005,'GGGG800101',583),('2001-02-10',1050,5005,'FFFF800101',503),('2001-03-03',1180,5017,'CCCC800101',334),('2001-03-04',1120,5012,'EEEE800101',215),('2001-03-11',1210,5014,'FFFF800101',70),('2001-04-05',1020,5017,'CCCC800101',478),('2001-06-07',1360,5014,'EEEE800101',37),('2001-06-08',1170,5018,'BBBB800101',517),('2001-06-09',1210,5014,'FFFF800101',479),('2001-07-07',1120,5007,'EEEE800101',692),('2001-08-02',1290,5006,'FFFF800101',279),('2001-08-11',1390,5011,'HHHH800101',697),('2001-10-08',1150,5004,'HHHH800101',453),('2001-10-09',1100,5010,'CCCC800101',699),('2001-12-02',1420,5008,'CCCC800101',444),('2001-12-07',1140,5014,'GGGG800101',219),('2002-02-10',1310,5019,'HHHH800101',199),('2002-02-12',1340,5014,'CCCC800101',324),('2002-03-03',1380,5018,'GGGG800101',302),('2002-03-05',1410,5009,'BBBB800101',467),('2002-04-04',1130,5013,'FFFF800101',63),('2002-04-07',1220,5013,'GGGG800101',658),('2002-05-06',1370,5013,'FFFF800101',423),('2002-05-11',1410,5009,'BBBB800101',461),('2002-06-01',1390,5011,'HHHH800101',308),('2002-06-07',1130,5006,'FFFF800101',562),('2002-07-04',1360,5014,'EEEE800101',265),('2002-07-05',1100,5009,'CCCC800101',523),('2002-07-12',1280,5007,'EEEE800101',448),('2002-08-07',1250,5005,'BBBB800101',71),('2002-09-12',1230,5012,'HHHH800101',312),('2002-10-06',1300,5005,'GGGG800101',521),('2002-12-04',1310,5011,'HHHH800101',72),('2002-12-07',1040,5015,'EEEE800101',540),('2003-01-02',1220,5002,'GGGG800101',24),('2003-01-09',1150,5004,'HHHH800101',270),('2003-02-02',1300,5005,'GGGG800101',457),('2003-02-06',1180,5018,'CCCC800101',407),('2003-05-07',1020,5002,'CCCC800101',582),('2003-06-01',1230,5003,'HHHH800101',530),('2003-07-03',1190,5016,'DDDD800101',622),('2003-08-01',1300,5010,'GGGG800101',119),('2003-10-02',1260,5009,'CCCC800101',2),('2003-12-01',1390,5019,'HHHH800101',107),('2004-05-03',1010,5018,'BBBB800101',523),('2004-05-07',1280,5008,'EEEE800101',107),('2005-04-06',1110,5011,'DDDD800101',368);
/*!40000 ALTER TABLE `entregan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiales`
--

DROP TABLE IF EXISTS `materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiales` (
  `Clave` bigint(20) unsigned NOT NULL,
  `Descripción` varchar(100) DEFAULT NULL,
  `Precio` float DEFAULT NULL,
  PRIMARY KEY (`Clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiales`
--

LOCK TABLES `materiales` WRITE;
/*!40000 ALTER TABLE `materiales` DISABLE KEYS */;
INSERT INTO `materiales` VALUES (1010,'Varilla 4/32',115),(1020,'Varilla 3/17',130),(1030,'Varilla 4/33',145),(1040,'Varilla 3/18',160),(1050,'Varilla 4/34',175),(1060,'Varilla 3/19',190),(1070,'Varilla 4/35',205),(1080,'Ladrillos rojos',50),(1090,'Ladrillos grises',35),(1100,'Block',30),(1110,'Megablock',40),(1120,'Sillar rosa',100),(1130,'Sillar gris',110),(1140,'Cantera blanca',200),(1150,'Cantera gris',1210),(1160,'Cantera rosa',1420),(1170,'Cantera amarilla',230),(1180,'Recubrimiento P1001',200),(1190,'Recubrimiento P1010',220),(1200,'Recubrimiento P1019',240),(1210,'Recubrimiento P1028',250),(1220,'Recubrimiento P1037',280),(1230,'Cemento ',300),(1240,'Arena',200),(1250,'Grava',100),(1260,'Gravilla',90),(1270,'Tezontle',80),(1280,'Tepetate',34),(1290,'Tuber�a 3.5',200),(1300,'Tuber�a 4.3',210),(1310,'Tuber�a 3.6',220),(1320,'Tuber�a 4.4',230),(1330,'Tuber�a 3.7',240),(1340,'Tuber�a 4.5',250),(1350,'Tuber�a 3.8',260),(1360,'Pintura C1010',125),(1370,'Pintura B1020',125),(1380,'Pintura C1011',725),(1390,'Pintura B1021',125),(1400,'Pintura C1011',125),(1410,'Pintura B1021',125),(1420,'Pintura C1012',125),(1430,'Pintura B1022',125);
/*!40000 ALTER TABLE `materiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `RFC` varchar(15) NOT NULL,
  `RazonSocial` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RFC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES ('BBBB800101','Oviedo'),('CCCC800101','La Ferre'),('DDDD800101','Cecoferre'),('EEEE800101','Alvin'),('FFFF800101','Comex'),('GGGG800101','Tabiquera del centro'),('HHHH800101','Tubasa');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyectos` (
  `Numero` bigint(20) unsigned NOT NULL,
  `Denominación` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
INSERT INTO `proyectos` VALUES (5001,'Aztec�n'),(5002,'CIT Campeche'),(5003,'Mexico sin ti no estamos completos'),(5004,'Educando en Coahuila'),(5005,'Infonavit Durango'),(5006,'Reconstrucci�n del templo de Guadalupe'),(5007,'Construcci�n de plaza Magnolias'),(5008,'Televisa en acci�n'),(5009,'Disco Atlantic'),(5010,'Construcci�n de Hospital Infantil'),(5011,'Remodelaci�n de aulas del IPP'),(5012,'Restauraci�n de instalaciones del CEA'),(5013,'Reparaci�n de la plaza Sonora'),(5014,'Remodelaci�n de Soriana'),(5015,'CIT Yucatan'),(5016,'Ampliaci�n de la carretera a la huasteca'),(5017,'Reparaci�n de la carretera del sol'),(5018,'Tu cambio por la educacion'),(5019,'Queretaro limpio');
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'Lab09'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-15  9:02:09