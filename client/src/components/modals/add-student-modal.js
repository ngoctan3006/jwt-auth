import React, { useState } from 'react';

const AddStudentModal = ({ addStudent, studentPending, removePending, acceptStudent }) => {
  const [studentCode, setStudentCode] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();
    addStudent(studentCode);
    setStudentCode('');
  };

  return (
    <div
      className="modal fade"
      id="addStudentModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 'bold' }}>
              Thêm sinh viên vào lớp học
            </h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="addStudentForm">
              <div className="form-group">
                <label htmlFor="student-id">Mã sinh viên</label>
                <input
                  type="text"
                  className="form-control"
                  id="student-id"
                  style={{ width: '50%' }}
                  value={studentCode}
                  onChange={(e) => setStudentCode(e.target.value)}
                />
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <button className="btn btn-block btn-primary" onClick={handleAddStudent}>
                    Thêm
                  </button>
                </div>
              </div>
              <div className="mb-lg-5"></div>
              <div className="mb-4" style={{ fontWeight: 'bolder' }}>
                Danh sách sinh viên chờ phê duyệt vào lớp
              </div>
              <div>
                <table className="table table-striped">
                  <tbody>
                    {studentPending?.length ? (
                      studentPending.map((item) => (
                        <tr key={item.code}>
                          <td width="10%">{item.code}</td>
                          <td width="25%">{item.fullname}</td>
                          <td width="10%">
                            <button
                              className="btn btn-success mr-2"
                              onClick={(e) => {
                                e.preventDefault();
                                acceptStudent(item);
                              }}
                            >
                              <i className="fa fa-fw fa-check"></i>
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={(e) => {
                                e.preventDefault();
                                removePending(item);
                              }}
                            >
                              <i className="fa fa-fw fa-xmark"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center">
                          Không có dữ liệu
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
