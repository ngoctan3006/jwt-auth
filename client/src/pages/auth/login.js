import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUser, loginUser, userSelector } from './authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '0',
  });

  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (user?.role === 2) {
      navigate('/admin');
    } else if (user?.role === 1) {
      navigate('/lecturer');
    } else if (user?.role === 0) {
      navigate('/student');
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

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
                            value={formData.username}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user mb-4"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
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
                              checked={formData.role === '0'}
                              onChange={handleChange}
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
                              checked={formData.role === '1'}
                              onChange={handleChange}
                            />
                            <label className="custom-control-label" htmlFor="lecture-role">
                              Giảng viên
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                          onClick={handleSubmit}
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
};

export default Login;
