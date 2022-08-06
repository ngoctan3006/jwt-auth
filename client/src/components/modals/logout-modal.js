import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { logout } from '../../pages/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LogoutModal = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    handleClose();
    navigate('/login');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Thay đổi thông tin lớp học</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn có chắc chắn muốn đăng xuất?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Bỏ qua
        </Button>
        <Button variant="primary" onClick={handleLogout}>
          Đăng xuất
        </Button>
      </Modal.Footer>
    </Modal>
    // <div
    //   className="modal fade"
    //   id="logoutModal"
    //   tabIndex="-1"
    //   role="dialog"
    //   aria-labelledby="exampleModalLabel"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog" role="document">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title" id="exampleModalLabel">
    //           Đăng xuất?
    //         </h5>
    //         <button className="close" type="button" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true">×</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">Bạn có chắc chắn muốn đăng xuất?</div>
    //       <div className="modal-footer">
    //         <button className="btn btn-secondary" type="button" data-dismiss="modal">
    //           Bỏ qua
    //         </button>
    //         <Button className="btn btn-primary" onClick={handleLogout}>
    //           Đăng xuất
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LogoutModal;
