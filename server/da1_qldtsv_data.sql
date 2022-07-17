-- Database: `qldt`
CREATE DATABASE `qldt`;

-- --------------------------------------------------------
-- Table structure for table `user`
CREATE TABLE `qldt`.`user` (
  `id` varchar(36) UNIQUE PRIMARY KEY NOT NULL,
  `username` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int NOT NULL
);

-- Table structure for table `student`
CREATE TABLE `qldt`.`student` (
  `code` varchar(10) UNIQUE PRIMARY KEY NOT NULL,
  `userId` varchar(36),
  `fullname` varchar(36),
  FOREIGN KEY (`userId`) REFERENCES `qldt`.`user` (`id`) ON DELETE CASCADE
);

-- Table structure for table `teacher`
CREATE TABLE `qldt`.`teacher` (
  `code` varchar(36) UNIQUE PRIMARY KEY NOT NULL,
  `userId` varchar(36),
  `fullname` varchar(36),
  FOREIGN KEY (`userId`) REFERENCES `qldt`.`user` (`id`) ON DELETE CASCADE
);

-- Table structure for table `class`
CREATE TABLE `qldt`.`class` (
  `id` varchar(36) UNIQUE NOT NULL,
  `code` varchar(25) UNIQUE PRIMARY KEY NOT NULL,
  `room` varchar(20) NOT NULL,
  `semester` varchar(10) NOT NULL,
  `teacherCode` varchar(36) NOT NULL,
  `subjectName` varchar(255) NOT NULL,
  FOREIGN KEY (`teacherCode`) REFERENCES `qldt`.`teacher` (`code`) ON DELETE CASCADE
);

CREATE TABLE `qldt`.`class_student` (
  `classCode` varchar(25) NOT NULL,
  `studentCode` varchar(10) NOT NULL,
  `midterm` double,
  `final` double,
  `status` int DEFAULT 0,
  FOREIGN KEY (`classCode`) REFERENCES `qldt`.`class` (`code`) ON DELETE CASCADE,
  FOREIGN KEY (`studentCode`) REFERENCES `qldt`.`student` (`code`) ON DELETE CASCADE
);

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Tan30062000';
-- flush privileges;