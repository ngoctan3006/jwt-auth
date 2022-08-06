import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ChangePasswordModal = ({ show, setShow, changePassword, logout }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: '',
  });

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changePassword(formData);
    handleClose();
    // this.props.logout();
    // navigate('/login');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Thay đổi mật khẩu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="class-code">
            <Form.Label>Mật khẩu cũ</Form.Label>
            <Form.Control
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject-name">
            <Form.Label>Mật khẩu mới</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="room">
            <Form.Label>Nhập lại mật khẩu mới</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Bỏ qua
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Cập nhật
        </Button>
      </Modal.Footer>
    </Modal>
    // <div
    //   className="modal fade"
    //   id="changePassModal"
    //   tabIndex="-1"
    //   role="dialog"
    //   aria-labelledby=""
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog" role="document">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 'bold' }}>
    //           Thay đổi mật khẩu
    //         </h5>
    //         <button className="close" type="button" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true">×</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">
    //         <form id="change-password">
    //           <div className="form-group">
    //             <label>Nhập mật khẩu cũ</label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               id="old-pass"
    //               name="oldPassword"
    //               value={formData.oldPassword}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label>Nhập mật khẩu mới</label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               id="new-pass"
    //               name="password"
    //               value={formData.password}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label>Nhập lại mật khẩu mới</label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               id="cf-pass"
    //               name="confirmPassword"
    //               value={formData.confirmPassword}
    //               onChange={handleChange}
    //             />
    //           </div>
    //         </form>
    //       </div>
    //       <div className="modal-footer">
    //         <button className="btn btn-secondary" data-dismiss="modal">
    //           Bỏ qua
    //         </button>
    //         <button className="btn btn-primary" onClick={handleSubmit}>
    //           Thay đổi
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ChangePasswordModal;
