import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditStudentModal = ({ show, setShow, studentInfo, updateScore }) => {
  const [formData, setFormData] = useState({ ...studentInfo });

  useEffect(() => setFormData({ ...studentInfo }), [studentInfo]);

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateScore({ ...formData });
    alert('Cập nhật thành công');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Thay đổi điểm sinh viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Mã sinh viên</Form.Label>
            <Form.Control
              type="text"
              name="studentCode"
              disabled
              value={formData.studentCode}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Họ tên sinh viên</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Điểm giữa kỳ</Form.Label>
            <Form.Control
              type="text"
              name="midterm"
              value={formData.midterm}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Điểm cuối kỳ</Form.Label>
            <Form.Control type="text" name="final" value={formData.final} onChange={handleChange} />
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
  );
};

export default EditStudentModal;
