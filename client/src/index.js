import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { store } from './app/store';

// PAGES
import AdminHome from './pages/admin';
import AdminAccountlist from './pages/admin/account-list';
import AdminInfo from './pages/admin/info';
import Login from './pages/auth/login';
import LecturerHome from './pages/lecturer';
import LecturerClassDetail from './pages/lecturer/classdetail';
import LecturerClasslist from './pages/lecturer/classlist';
import LecturerInfo from './pages/lecturer/info';
import StudentHome from './pages/student';
import StudentClassDetail from './pages/student/classdetail';
import StudentClasslist from './pages/student/classlist';
import StudentInfo from './pages/student/info';

const ProtectedRoute = ({ children, role }) => {
  const user = useSelector((state) => state.auth.user);
  // const token = localStorage.getItem('token');
  console.log(user);
  if (!user && user?.role !== role) {
    return <Navigate to="/login" />;
  }
  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div>
      <Router basename="">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          {/* Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role={2}>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/accountlist"
            element={
              <ProtectedRoute role={2}>
                <AdminAccountlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/info"
            element={
              <ProtectedRoute role={2}>
                <AdminInfo />
              </ProtectedRoute>
            }
          />

          {/* Lecturer */}
          <Route
            path="/lecturer"
            element={
              <ProtectedRoute role={1}>
                <LecturerHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lecturer/classlist"
            element={
              <ProtectedRoute role={1}>
                <LecturerClasslist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lecturer/classdetail/:id"
            element={
              <ProtectedRoute role={1}>
                <LecturerClassDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lecturer/info"
            element={
              <ProtectedRoute role={1}>
                <LecturerInfo />
              </ProtectedRoute>
            }
          />

          {/* Student */}
          <Route
            path="/student"
            element={
              <ProtectedRoute role={0}>
                <StudentHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/classlist"
            element={
              <ProtectedRoute role={0}>
                <StudentClasslist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/classdetail/:id"
            element={
              <ProtectedRoute role={0}>
                <StudentClassDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/info"
            element={
              <ProtectedRoute role={0}>
                <StudentInfo />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  </Provider>
);
