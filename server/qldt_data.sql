-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 29, 2022 lúc 11:55 PM
-- Phiên bản máy phục vụ: 10.4.18-MariaDB
-- Phiên bản PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qldt_data`
--
CREATE DATABASE IF NOT EXISTS `qldt_data` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `qldt_data`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `classes`
--

CREATE TABLE `classes` (
  `class_id` int(6) NOT NULL,
  `course_id` varchar(10) NOT NULL,
  `lecturer_id` varchar(36) NOT NULL,
  `semester_id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `time` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `classes`
--

INSERT INTO `classes` (`class_id`, `course_id`, `lecturer_id`, `semester_id`, `address`, `time`, `created_at`) VALUES
(130672, 'SSH1151', 'anh.tt@hust.edu.vn', 20212, '', '', '2022-04-30 22:29:11'),
(138824, 'ET3220', 'nam.nk@hust.edu.vn', 20212, '', '', '2022-04-30 22:45:23'),
(713555, 'ET3260', 'loan.nk@hust.edu.vn', 20212, '', '', '2022-04-30 22:29:11'),
(713556, 'ET3260', 'hiep.pc@hust.edu.vn ', 20212, '', '', '2022-04-30 22:51:34'),
(713557, 'ET3260', 'tung.nm@hust.edu.vn	', 20212, '', '', '2022-04-30 22:53:22'),
(713558, 'ET3260', 'hiep.pc@hust.edu.vn', 20212, '', '', '2022-04-30 12:45:03'),
(789547, 'RT1223', 'tung.nm@hust.edu.vn', 20212, '', '', '2022-04-30 22:45:23');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `course`
--

CREATE TABLE `course` (
  `course_id` varchar(10) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `faculty_id` varchar(10) NOT NULL,
  `credit` int(11) NOT NULL,
  `weight` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `course`
--

INSERT INTO `course` (`course_id`, `course_name`, `faculty_id`, `credit`, `weight`) VALUES
('ET3220', 'Điện tử số', 'SET', 3, 0.3),
('ET3260', 'Kỹ thuật phần mềm ứng dụng', 'SET', 2, 0.3),
('RT1223', 'Bóng rổ', 'GDTC', 0, 0.3),
('SSH1151', 'Tư tưởng Hồ Chí Minh', 'FPT', 2, 0.3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `faculty`
--

CREATE TABLE `faculty` (
  `faculty_id` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `faculty`
--

INSERT INTO `faculty` (`faculty_id`, `name`, `address`) VALUES
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
-- Cấu trúc bảng cho bảng `semester`
--

CREATE TABLE `semester` (
  `semester_id` int(11) NOT NULL,
  `detail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `semester`
--

INSERT INTO `semester` (`semester_id`, `detail`) VALUES
(20211, 'Kỳ I năm học 2021-2022'),
(20212, 'Kỳ II năm học 2021-2022'),
(20213, 'Kỳ hè năm học 2021-2022');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `student_join_class`
--

CREATE TABLE `student_join_class` (
  `student_id` varchar(36) NOT NULL,
  `class_id` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  `mid_term` float NOT NULL,
  `final_term` float NOT NULL,
  `summary` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `uid` varchar(36) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `faculty_id` varchar(10) NOT NULL,
  `role` varchar(30) NOT NULL,
  `status` varchar(30) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`uid`, `username`, `password`, `fullname`, `birthday`, `email`, `mobile`, `address`, `faculty_id`, `role`, `status`, `created_at`) VALUES
('121142', 'anh.tn', '', 'Trần Nam Anh', '1985-12-27', 'anh.tn@hust.edu.vn', '', '', '', 'role_lecturer', 'active', '2022-07-29 23:56:19'),
('20162332', 'hai.nq162332', '', 'Nguyễn Quang Hải', '1997-12-12', 'hai.nq162332@sis.hust.edu.vn', '', 'Hải Dương', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20182698', 'nam.tv192698', '', 'Trần Văn Nam', '2000-12-12', 'nam.tv192698@sis.hust.edu.vn', '', 'Hà Tĩnh', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20193182', 'tung.nm193182', '', 'Nguyễn Mạnh Tùng', '2001-07-05', 'tung.nm193182@sis.hust.edu.vn', '', 'Nam Định', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20193183', 'trang.dq193183', '', 'Đinh Quỳnh Trang', '2001-12-30', 'trang.dq193183@sis.hust.edu.vn', '', 'Nam Định', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20193227', 'an.tv193227', '', 'Trần Văn An', '2001-01-20', 'an.tv193227@sis.hust.edu.vn', '', 'Hà Nam', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20193256', 'huong.nt193256', '', 'Nguyễn Thị Hường', '2001-01-05', 'huong.nt193256@sis.hust.edu.vn', '', 'Hà Nội', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20193333', 'an.td193333', '', 'Trần Đức An', '2001-01-18', 'an.td193333@sis.hust.edu.vn', '', '1 Đại Cồ Việt', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20193456', 'nhan.nt193456', '', 'Nguyễn Trọng Nhân', '2001-05-31', 'nhan.nt193456@sis.hust.edu.vn', '', 'Nghệ An', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20193625', 'duc.nd193625', '', 'Nguyễn Danh Đức', '2001-05-31', 'duc.nd193625@sis.hust.edu.vn', '', 'Hà Nội', '', 'role_student', 'inactive', '2022-07-30 02:30:05'),
('20201235', 'duc.lt201235', '', 'Lưu Tuấn Đức', '2002-12-12', 'duc.lt201235@sis.hust.edu.vn', '', 'Phú Yên', '', 'role_student', 'active', '2022-07-30 02:30:05'),
('20201932', 'duong.nh201932', '', 'Nguyễn Hùng Dương', '2001-04-26', 'duong.nh201932@sis.hust.edu.vn', '', 'Nam Định', '', 'role_student', 'active', '2022-07-30 02:30:05');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`class_id`),
  ADD KEY `class_id` (`class_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `lecturer_id` (`lecturer_id`),
  ADD KEY `semester_id` (`semester_id`);

--
-- Chỉ mục cho bảng `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Chỉ mục cho bảng `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`faculty_id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Chỉ mục cho bảng `semester`
--
ALTER TABLE `semester`
  ADD PRIMARY KEY (`semester_id`),
  ADD KEY `semester_id` (`semester_id`);

--
-- Chỉ mục cho bảng `student_join_class`
--
ALTER TABLE `student_join_class`
  ADD PRIMARY KEY (`student_id`,`class_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `uid` (`uid`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD KEY `uid_2` (`uid`),
  ADD KEY `faculty_id` (`faculty_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
