import React from 'react';

class AddAccountModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="addAccountModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 'bold' }}>
                Thêm tài khoản mới
              </h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="addStudentForm">
                <div className="form-group">
                  <label htmlFor="account-id">Mã tài khoản (UID)</label>
                  <input type="text" className="form-control" id="account-id" />
                </div>
                <div className="form-group">
                  <label htmlFor="fullname">Họ tên</label>
                  <input type="text" className="form-control" id="fullname" />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Tên đăng nhập</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Vai trò</label>
                  <select className="form-control" id="role">
                    <option value="Role_Lecturer">Giảng viên</option>
                    <option value="Role_Student">Sinh viên</option>
                  </select>
                </div>
                <div className="mb-lg-5"></div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Bỏ qua
              </button>
              <button className="btn btn-primary" data-dismiss="modal">
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAccountModal;
