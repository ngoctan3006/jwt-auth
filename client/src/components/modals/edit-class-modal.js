import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditClassModal = ({ classInfo, update, show, setShow }) => {
  const [formData, setFormData] = useState({ ...classInfo, classCode: classInfo.code });

  const handleClose = () => setShow(false);

  useEffect(() => {
    setFormData({ ...classInfo, classCode: classInfo.code });
  }, [classInfo]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(formData.id, formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thay đổi thông tin lớp học</Modal.Title>
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
            <Form.Label>Tên môn học</Form.Label>
            <Form.Control
              type="text"
              name="subjectName"
              value={formData.subjectName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="semester">
            <Form.Label>Tên môn học</Form.Label>
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
          Cập nhật
        </Button>
      </Modal.Footer>
    </Modal>
  );

  // return (
  //   <div
  //     className="modal fade"
  //     id="editClassModal"
  //     tabIndex="-1"
  //     role="dialog"
  //     aria-labelledby=""
  //     aria-hidden="true"
  //   >
  //     <div className="modal-dialog" role="document">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 'bold' }}>
  //             Thay đổi thông tin lớp học
  //           </h5>
  //           <button className="close" type="button" data-dismiss="modal" aria-label="Close">
  //             <span aria-hidden="true">×</span>
  //           </button>
  //         </div>
  //         <div className="modal-body">
  //           <form id="editClassForm">
  //             <div className="form-group">
  //               <label htmlFor="edit-class-id">Mã lớp học</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="edit-class-id"
  //                 style={{ width: '100%' }}
  //                 name="classCode"
  //                 value={formData.classCode}
  //                 onChange={handleChange}
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label htmlFor="edit-class-title">Tên môn học</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="edit-class-title"
  //                 style={{ width: '100%' }}
  //                 name="subjectName"
  //                 value={formData.subjectName}
  //                 onChange={handleChange}
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label htmlFor="edit-class-semester">Học kỳ</label>
  //               <select
  //                 className="form-control"
  //                 id="edit-class-semester"
  //                 name="semester"
  //                 value={formData.semester}
  //                 onChange={handleChange}
  //               >
  //                 <option value="20221">20221</option>
  //                 <option value="20222">20222</option>
  //                 <option value="20223">20223</option>
  //                 <option value="20231">20231</option>
  //                 <option value="20232">20232</option>
  //                 <option value="20233">20233</option>
  //               </select>
  //             </div>
  //             <div className="form-group">
  //               <label htmlFor="edit-class-room">Phòng học</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="edit-class-room"
  //                 style={{ width: '100%' }}
  //                 name="room"
  //                 value={formData.room}
  //                 onChange={handleChange}
  //               />
  //             </div>
  //           </form>
  //         </div>
  //         <div className="modal-footer">
  //           <button className="btn btn-secondary" data-dismiss="modal">
  //             Bỏ qua
  //           </button>
  //           <button className="btn btn-primary" onClick={handleSubmit}>
  //             Cập nhật
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default EditClassModal;
