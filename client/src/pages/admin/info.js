import React from 'react';
import { Link } from 'react-router-dom';
import ChangePasswordModal from '../../components/modals/change-password-modal';
import LogoutModal from '../../components/modals/logout-modal';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarAdmin from '../../components/sections/sidebar-admin';
import SidebarLecturer from '../../components/sections/sidebar-lecturer';

class AdminInfo extends React.Component {
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarAdmin />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <SearchBar />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h3 style={{ fontWeight: 'bolder' }}>Thông tin cá nhân - Quản trị viên</h3>
                    <hr />
                  </div>
                  <div className="col-md-8">
                    <form id="lecture-info">
                      <div className="form-group">
                        <label>Tên đăng nhập</label>
                        <input
                          type="text"
                          className="form-control mb-4"
                          id="username"
                          style={{ width: '50%' }}
                          value="admin"
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#changePassModal"
                        >
                          Thay đổi mật khẩu
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <ChangePasswordModal />
            </div>
            <Footer />
          </div>
        </div>
        <Link className="scroll-to-top rounded" to="#page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
        <LogoutModal />
      </div>
    );
  }
}

export default AdminInfo;
