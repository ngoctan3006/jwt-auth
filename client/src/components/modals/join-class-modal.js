import React from 'react';

const JoinClassModal = () => {
  return (
    <div
      className="modal fade"
      id="registerModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 'bold' }}>
              Đăng ký lớp học
            </h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="addClassForm">
              <div className="form-group">
                <label htmlFor="class-id">Mã lớp học</label>
                <input
                  type="text"
                  className="form-control"
                  id="class-id"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="class-title">Tên môn học</label>
                <input
                  type="text"
                  className="form-control"
                  id="class-title"
                  style={{ width: '100%' }}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-dismiss="modal">
              Bỏ qua
            </button>
            <button className="btn btn-primary" data-dismiss="modal">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinClassModal;
