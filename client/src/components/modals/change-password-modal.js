import React, { Component } from 'react';
import { withRouter } from '../../utils/withRouter';

class ChangePasswordModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      oldPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.onOk(this.state);
      alert('Thay đổi mật khẩu thành công!');
      localStorage.removeItem('token');
      // this.props.logout();
      this.props.navigate('/login');
    } catch (error) {
      alert(error?.response?.data?.message || error);
    }
  };

  render() {
    return (
      <div
        className="modal fade"
        id="changePassModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 'bold' }}>
                Thay đổi mật khẩu
              </h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="change-password">
                <div className="form-group">
                  <label>Nhập mật khẩu cũ</label>
                  <input
                    type="password"
                    className="form-control"
                    id="old-pass"
                    name="oldPassword"
                    value={this.state.oldPassword}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Nhập mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    id="new-pass"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Nhập lại mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cf-pass"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Bỏ qua
              </button>
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChangePasswordModal);
