import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const JoinClassModal = ({ show, setShow, addClass }) => {
  const [code, setCode] = useState('');
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addClass(code);
    setCode('');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Thay đổi mật khẩu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="class-code">
            <Form.Label>Mã lớp</Form.Label>
            <Form.Control type="text" value={code} onChange={(e) => setCode(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Bỏ qua
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Đăng ký
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JoinClassModal;
