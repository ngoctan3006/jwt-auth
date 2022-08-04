import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ChangePasswordModal from '../../components/modals/change-password-modal';
import LogoutModal from '../../components/modals/logout-modal';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarLecturer from '../../components/sections/sidebar-lecturer';
import { changePassword, logoutUser } from '../auth/authSlice';

class LecturerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenChangePasswordModal: false,
      isOpenLogoutModal: false,
    };
  }

  handleChangePassword = async (formData) => {
    try {
      const res = await this.props.changePassword(formData);
      return res;
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarLecturer />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <SearchBar />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h3 style={{ fontWeight: 'bolder' }}>Thông tin cá nhân - Giảng viên</h3>
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
                          disabled
                          value={this.props.user.user.username}
                        />
                      </div>
                      <div className="form-group">
                        <label>Họ tên</label>
                        <input
                          type="text"
                          className="form-control mb-5"
                          id="fullname"
                          style={{ width: '50%' }}
                          disabled
                          value={this.props.user.user.fullname}
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
              <ChangePasswordModal onOk={this.handleChangePassword} logout={this.logoutUser} />
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

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { changePassword, logoutUser };

export default connect(mapStateToProps, mapDispatchToProps)(LecturerInfo);
