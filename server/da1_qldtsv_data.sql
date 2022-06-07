-- Database: `qldt_data`

CREATE DATABASE `qldt_data`;

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `qldt_data`.`classes` (
  `class_id` int(6) NOT NULL,
  `subject_id` varchar(11) NOT NULL,
  `teacher_id` varchar(255) NOT NULL,
  `couse_id` int(11) NOT NULL,
  `class_size` int(11) NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
);

--
-- Dumping data for table `classes`
--

INSERT INTO `qldt_data`.`classes` (`class_id`, `subject_id`, `teacher_id`, `couse_id`, `class_size`, `time`) VALUES
(130672, 'SSH1151', 'anh.tt@hust.edu.vn', 20212, 0, '2022-04-30 22:29:11'),
(713555, 'ET3260', 'loan.nk@hust.edu.vn', 20212, 0, '2022-04-30 22:29:11'),
(713556, 'ET3260', 'hiep.pc@hust.edu.vn ', 20212, 0, '2022-04-30 22:51:34'),
(713557, 'ET3260', 'tung.nm@hust.edu.vn	', 20212, 0, '2022-04-30 22:53:22'),
(713558, 'ET3260', 'hiep.pc@hust.edu.vn', 20212, 0, '2022-04-30 12:45:03'),
(789547, 'RT1223', 'tung.nm@hust.edu.vn', 20212, 0, '2022-04-30 22:45:23'),
(138824, 'ET3220', 'nam.nk@hust.edu.vn', 20212, 0, '2022-04-30 22:45:23');

-- --------------------------------------------------------

--
-- Table structure for table `couse`
--

CREATE TABLE `qldt_data`.`couse` (
  `couse_id` int(11) NOT NULL,
  `details` varchar(255) NOT NULL
);

--
-- Dumping data for table `couse`
--

INSERT INTO `qldt_data`.`couse` (`couse_id`, `details`) VALUES
(20211, 'Kỳ I năm học 2021-2022'),
(20212, 'Kỳ II năm học 2021-2022'),
(20213, 'Kỳ hè năm học 2021-2022');

-- --------------------------------------------------------

--
-- Table structure for table `khoa_data`
--

CREATE TABLE `qldt_data`.`khoa_data` (
  `ma_khoa` varchar(5) NOT NULL,
  `Ten_Khoa` varchar(255) NOT NULL,
  `Dia_Chi` varchar(255) NOT NULL
);

--
-- Dumping data for table `khoa_data`
--

INSERT INTO `qldt_data`.`khoa_data` (`ma_khoa`, `Ten_Khoa`, `Dia_Chi`) VALUES
('FPT', 'Khoa Lý luận Chính trị', 'D3 - 306'),
('GDQP', 'Khoa Giáo dục Quốc phòng & An ninh', 'D3 - 504'),
('GDTC', 'Khoa Giáo dục Thể chất', 'Tầng 2 - Nhà thi đấu Bách Khoa'),
('KHMT', 'Viện Khoa học và Công nghệ Môi trường', 'C10 - 312'),
('MSE', 'Viện Khoa học và Kỹ thuật Vật liệu', 'C5 - 315'),
('PDT', 'Phòng Đào Tạo', 'Nhà C1'),
('SAMI', 'Viện Toán ứng dụng và Tin học', 'D3 - 105A'),
('SBF', 'Viện Công nghệ Sinh học và Công nghệ Thực phẩm', 'C4 - 210'),
('SCE', 'Viện Kỹ thuật Hóa học', 'C4 - 214'),
('SEE', 'Viện Điện', 'C1 - 320'),
('SEM', 'Viện Kinh tế và Quản lý', 'C9 - 303,304'),
('SEP', 'Viện Vật lý Kỹ thuật', 'C10-101'),
('SEPD', 'Viện Sư phạm Kỹ thuật', 'D3-5-301'),
('SET', 'Viện Điện tử - Viễn thông', 'C9 - 405'),
('SHEER', 'Viện Khoa học và Công nghệ Nhiệt lạnh', 'C7 - T2- 204'),
('SME', 'Viện Cơ khí', 'C10 - 304'),
('SOFL', 'Viện Ngoại ngữ', 'D4 - 209'),
('SOICT', 'Viện Công nghệ Thông tin và Truyền thông', 'Nhà B1'),
('STE', 'Viện Cơ khí Động lực', 'C6 - 102'),
('TX', 'Viện Dệt may - Da giầy và Thời trang', 'C5-216');

-- --------------------------------------------------------

--
-- Table structure for table `mark_data`
--

CREATE TABLE `qldt_data`.`mark_data` (
  `student_id` int(8) NOT NULL,
  `subject_id` varchar(11) NOT NULL,
  `class_id` int(6) NOT NULL,
  `couse_id` int(11) NOT NULL,
  `midterm` int(2) DEFAULT NULL,
  `final_mark` varchar(5) DEFAULT NULL,
  `s_mark` varchar(2) DEFAULT NULL
);

--
-- Dumping data for table `mark_data`
--

INSERT INTO `qldt_data`.`mark_data` (`student_id`, `subject_id`, `class_id`, `couse_id`, `midterm`, `final_mark`, `s_mark`) VALUES
(20193182, 'ET3260', 713555, 20212, 9, 5, 'C'),
(20193456, 'ET3260', 713555, 20212, 6, 3, 'F'),
(20193333, 'SSH1151', 130672, 20212, 10, 10, 'A+'),
(20193456, 'ET32220', 138824, 20212, 5, 2, 'F'),
(20193227, 'SSH1151', 130672, 20212, 6, 3.5, 'D');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `qldt_data`.`student` (
  `student_id` int(8) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `birth_day` date NOT NULL,
  `khoa` varchar(5) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
);

--
-- Dumping data for table `student`
--

INSERT INTO `qldt_data`.`student` (`student_id`, `fullname`, `birth_day`, `khoa`, `address`, `email`, `time`) VALUES
(20162332, 'Nguyễn Quang Hải', '1997-12-12', 'SEE', 'Hải Dương', 'hai.nq162332@sis.hust.edu.vn', '2022-04-30 16:55:19'),
(20182698, 'Trần Văn Nam', '2000-12-12', 'STE', 'Hà Tĩnh', 'nam.tv192698@sis.hust.edu.vn', '2022-04-30 16:55:19'),
(20193182, 'Nguyễn Mạnh Tùng', '2001-07-05', 'SET', 'Nam Định', 'tung.nm193182@sis.hust.edu.vn', '2022-04-30 16:55:19'),
(20193183, 'Đinh Quỳnh Trang', '2001-12-30', 'SOICT', 'Nam Định', 'trang.dq193183@sis.hust.edu.vn', '2022-04-30 16:55:19'),
(20193227, 'Trần Văn An', '2001-01-20', 'SEP', 'Hà Nam', 'an.tv193227@sis.hust.edu.vn', '2022-04-30 17:00:21'),
(20193256, 'Nguyễn Thị Hường', '2001-01-05', 'SEP', 'Hà Nội', 'huong.nt193256@sis.hust.edu.vn', '2022-04-30 16:58:34'),
(20193333, 'Trần Đức An', '2001-01-18', 'SEE', '1 Đại Cồ Việt', 'an.td193333@sis.hust.edu.vn', '2022-04-30 21:44:40'),
(20193456, 'Nguyễn Trọng Nhân', '2001-05-31', 'SET', 'Nghệ An', 'nhan.nt193456@sis.hust.edu.vn', '2022-04-30 16:55:19'),
(20193625, 'Nguyễn Danh Đức', '2001-05-31', 'SET', 'Hà Nội', 'duc.nd193625@sis.hust.edu.vn', '2022-04-30 16:55:19'),
(20201235, 'Lưu Tuấn Đức', '2002-12-12', 'SEPD', 'Phú Yên', 'duc.lt201235@sis.hust.edu.vn', '2022-04-30 16:55:19'),
(20201932, 'Nguyễn Hùng Dương', '2001-04-26', 'SEE', 'Nam Định', 'duong.nh201932@sis.hust.edu.vn', '2022-04-30 16:55:19');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `qldt_data`.`subject` (
  `subject_name` varchar(255) NOT NULL,
  `subject_id` varchar(11) NOT NULL,
  `ma_khoa` varchar(5) NOT NULL,
  `So_Tin` float NOT NULL,
  `Trong_So` float NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
);

--
-- Dumping data for table `subject`
--

INSERT INTO `qldt_data`.`subject` (`subject_name`, `subject_id`, `ma_khoa`, `So_Tin`, `Trong_So`, `time`) VALUES
('Kỹ Thuật Phần Mềm Ứng Dụng', 'ET3260', 'SET', 2, 0.3, '2022-04-30 23:16:40'),
('Bóng rổ', 'RT1223', 'GDTC', 0, 0.3, '2022-04-30 23:16:40'),
('Tư tưởng Hồ Chí Minh', 'SSH1151', 'FPT', 2, 0.3, '2022-04-30 23:16:40'),
(	'Điện tử số', 'ET3220','SET', 3, 0.3, '2022-04-30 23:16:40');
-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `qldt_data`.`user` (
  `id` varchar(36) NOT NULL UNIQUE,
  `email` varchar(255) NOT NULL UNIQUE,
  `username` varchar(255) NOT NULL UNIQUE,
  `fullname` varchar(255),
  `birthday` date,
  `ma_khoa` varchar(5),
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `level` int,
  `time` datetime NOT NULL DEFAULT current_timestamp()
);

--
-- Dumping data for table `user`
--

INSERT INTO `qldt_data`.`user` (`email`, `fullname`, `birthday`, `ma_khoa`, `address`, `phone`, `password`, `level`, `time`) VALUES
('admin@hust.edu.vn', 'Trịnh Thế Anh', '2001-09-09', 'PDT', 'Thái Nguyên', 963134434, 'khongcomatkhau', 1, '2022-04-30 17:14:16'),
('ky.pt@hust.edu.vn', 'Phạm Thế Kỷ', '2002-06-13', 'SET', 'Bắc Ninh', 974859774, 'khongbietgihet', 0, '2022-04-30 17:14:16'),
('khang.nv@hust.edu.vn', 'Nguyễn Văn Khang', '2000-05-23', 'GDQP', 'Phú Yên', 352214458, 'qaz123456', 0, '2022-04-30 17:27:46'),
('anh.tt@hust.edu.vn', 'Trịnh Thế Anh', '2001-09-09', 'SET', 'Thái Nguyên', 963134434, 'khongcomatkhau', 0, '2022-04-30 17:26:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`class_id`,`subject_id`,`teacher_id`),
  ADD KEY `subject_id` (`subject_id`);

--
-- Indexes for table `couse`
--
ALTER TABLE `couse`
  ADD PRIMARY KEY (`couse_id`);

--
-- Indexes for table `khoa_data`
--
ALTER TABLE `khoa_data`
  ADD PRIMARY KEY (`ma_khoa`),
  ADD UNIQUE KEY `ma_khoa` (`ma_khoa`);

--
-- Indexes for table `mark_data`
--
ALTER TABLE `mark_data`
  ADD PRIMARY KEY (`student_id`,`subject_id`,`class_id`,`couse_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `class_id` (`class_id`),
  ADD KEY `couse_id` (`couse_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `student_id` (`student_id`),
  ADD KEY `khoa` (`khoa`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subject_id`),
  ADD UNIQUE KEY `subject_id` (`subject_id`),
  ADD KEY `ma_khoa` (`ma_khoa`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `ma_khoa` (`ma_khoa`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`);

--
-- Constraints for table `mark_data`
--
ALTER TABLE `mark_data`
  ADD CONSTRAINT `mark_data_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`class_id`),
  ADD CONSTRAINT `mark_data_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  ADD CONSTRAINT `mark_data_ibfk_3` FOREIGN KEY (`couse_id`) REFERENCES `couse` (`couse_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`khoa`) REFERENCES `khoa_data` (`ma_khoa`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`ma_khoa`) REFERENCES `khoa_data` (`ma_khoa`);
COMMIT;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Tan30062000';
-- flush privileges;
