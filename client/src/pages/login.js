import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="bg-gradient-light" style={{height: '100vh'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block">
                                            <img src="assets/images/HUST.png" style={{width: '80%'}} />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-lg-5 mt-lg-5" style={{fontWeight: 'bolder'}}>
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
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user mb-4"
                                                            id="password"
                                                            name="password"
                                                            placeholder="Password"
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
                                                                defaultChecked
                                                            />
                                                            <label className="custom-control-label" htmlFor="student-role">Sinh viên</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox small">
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                name="role"
                                                                id="lecture-role"
                                                                value="1"
                                                            />
                                                            <label className="custom-control-label" htmlFor="lecture-role">Giảng viên</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-user btn-block">
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

export default Login;
