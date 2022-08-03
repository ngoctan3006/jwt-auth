import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Login from './pages/login';
import LecturerHome from './pages/lecturer';
import LecturerClasslist from './pages/lecturer/classlist';
import LecturerClassDetail from './pages/lecturer/classdetail';
import StudentClassDetail from './pages/student/classdetail';
import LecturerInfo from './pages/lecturer/info';
import StudentClasslist from './pages/student/classlist';
import StudentHome from './pages/student';
import StudentInfo from './pages/student/info';
import AdminHome from './pages/admin';
import AdminInfo from './pages/admin/info';
import AdminAccountlist from './pages/admin/account-list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router basename=''>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        {/* Admin */}
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/accountlist" element={<AdminAccountlist />} />
        <Route path="/admin/info" element={<AdminInfo />} />
        {/* Lecturer */}
        <Route path="/lecturer/" element={<LecturerHome />} />
        <Route path="/lecturer/classlist" element={<LecturerClasslist />} />
        <Route path="/lecturer/classdetail/:id" element={<LecturerClassDetail />} />
        <Route path="/lecturer/info" element={<LecturerInfo />} />
        {/* Student */}
        <Route path="/student/" element={<StudentHome />} />
        <Route path="/student/classlist" element={<StudentClasslist />} />
        <Route path="/student/classdetail/:id" element={<StudentClassDetail />} />
        <Route path="/student/info" element={<StudentInfo />} />
      </Routes>
    </Router>
  </div>
)
