import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from '../../utils/withRouter';
import { loginUser, loadUser } from './authSlice';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      role: '0',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadUser = this.loadUser.bind(this);

    this.loadUser();
  }

  loadUser = async () => {
    try {
      const { role } = await this.props.loadUser();

      const { navigate } = this.props;
      if (role === 2) {
        navigate('/admin');
      } else if (role === 1) {
        navigate('/lecturer');
      } else if (role === 0) {
        navigate('/student');
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        user: { role },
      } = await this.props.loginUser(this.state);

      const { navigate } = this.props;
      if (role === 2) {
        navigate('/admin');
      } else if (role === 1) {
        navigate('/lecturer');
      } else if (role === 0) {
        navigate('/student');
      }
    } catch (error) {
      alert(error.response.data.message || 'Something went wrong!');
    }
  };

  render() {
    return (
      <div className="bg-gradient-light" style={{ height: '100vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block">
                      <img src="assets/images/HUST.png" style={{ width: '80%' }} alt="logo" />
                    </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1
                            className="h4 text-gray-900 mb-lg-5 mt-lg-5"
                            style={{ fontWeight: 'bolder' }}
                          >
                            Đăng nhập hệ thống
                          </h1>
                        </div>
                        <form className="user">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user mb-4"
                              id="username"
                              name="username"
                              aria-describedby="emailHelp"
                              placeholder="Username"
                              value={this.state.username}
                              onChange={(e) => this.setState({ username: e.target.value })}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user mb-4"
                              id="password"
                              name="password"
                              placeholder="Password"
                              value={this.state.password}
                              onChange={(e) => this.setState({ password: e.target.value })}
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="role"
                                id="student-role"
                                value="0"
                                checked={this.state.role === '0'}
                                onChange={(e) => this.setState({ role: e.target.value })}
                              />
                              <label className="custom-control-label" htmlFor="student-role">
                                Sinh viên
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="role"
                                id="lecture-role"
                                value="1"
                                checked={this.state.role === '1'}
                                onChange={(e) => this.setState({ role: e.target.value })}
                              />
                              <label className="custom-control-label" htmlFor="lecture-role">
                                Giảng viên
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                            onClick={this.handleSubmit}
                          >
                            Login
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user,
});

const mapDispatchToProps = { loginUser, loadUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
