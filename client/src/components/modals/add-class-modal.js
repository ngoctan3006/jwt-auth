import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddClassModal = ({ show, setShow, add }) => {
  const [formData, setFormData] = useState({
    classCode: '',
    subjectName: '',
    subjectCode: '',
    semester: '20221',
    room: '',
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
    add(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Thêm lớp học</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="class-code">
            <Form.Label>Mã lớp học</Form.Label>
            <Form.Control
              type="text"
              name="classCode"
              value={formData.classCode}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject-name">
            <Form.Label>Mã môn học</Form.Label>
            <Form.Control
              type="text"
              name="subjectCode"
              value={formData.subjectCode}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject-name">
            <Form.Label>Tên môn học</Form.Label>
            <Form.Control
              type="text"
              name="subjectName"
              value={formData.subjectName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="semester">
            <Form.Label>Học kỳ</Form.Label>
            <Form.Select name="semester" value={formData.semester} onChange={handleChange}>
              <option value="20221">20221</option>
              <option value="20222">20222</option>
              <option value="20223">20223</option>
              <option value="20231">20231</option>
              <option value="20232">20232</option>
              <option value="20233">20233</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="room">
            <Form.Label>Phòng học</Form.Label>
            <Form.Control type="text" name="room" value={formData.room} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Bỏ qua
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Thêm lớp học
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddClassModal;
