import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelector } from '../../pages/auth/authSlice';
import LogoutModal from '../modals/logout-modal';

const SidebarAdmin = () => {
  const [show, setShow] = useState(false);
  const user = useSelector(userSelector);

  return (
    <>
      <ul
        className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/admin"
        >
          <div className="sidebar-brand-icon">
            <i className="fas fa-user"></i>
          </div>
          <div className="sidebar-brand-text mx-3">{user.fullname}</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-user"></i>
            <span>Quản lý tài khoản</span>
          </Link>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/admin/info">
                Thông tin cá nhân
              </Link>
              <Link to="#" className="collapse-item" onClick={() => setShow(true)}>
                Đăng xuất
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/accountlist">
            <i className="fas fa-fw fa-building"></i>
            <span>Danh sách tài khoản</span>
          </Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
      <LogoutModal show={show} setShow={setShow} />
    </>
  );
};

export default SidebarAdmin;
