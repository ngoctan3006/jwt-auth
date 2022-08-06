import React from 'react';
import { Link } from 'react-router-dom';

const LogoutModal = () => {
  return (
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Đăng xuất?
            </h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Bạn có chắc chắn muốn đăng xuất?</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">
              Bỏ qua
            </button>
            <Link className="btn btn-primary" to="#">
              Đăng xuất
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
