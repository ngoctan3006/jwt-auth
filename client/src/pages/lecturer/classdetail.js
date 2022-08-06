import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import AddStudentModal from '../../components/modals/add-student-modal';
import EditStudentModal from '../../components/modals/edit-student-modal';
import InputMarkModal from '../../components/modals/input-mark';
import LogoutModal from '../../components/modals/logout-modal';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarLecturer from '../../components/sections/sidebar-lecturer';
import ClassdetailItem from '../../components/widgets/classdetail-item';
import {
  currentClassSelector,
  getCurrent,
  getStudents,
  getStudentsPending,
  studentListSelector,
  studentPendingSelector,
  inputStudentScore,
  deleteStudent,
} from './lecturerSlice';

const LecturerClassDetail = () => {
  const [currentStudent, setCurrentStudent] = useState({});
  const [isOpenAddStudentModal, setIsOpenAddStudentModal] = useState(false);
  const [isOpenEditStudentModal, setIsOpenEditStudentModal] = useState(false);
  const [isOpenInputMarkModal, setIsOpenInputMarkModal] = useState(false);
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);
  const currentClass = useSelector(currentClassSelector);
  const studentList = useSelector(studentListSelector);
  const studentPending = useSelector(studentPendingSelector);
  const { id } = useParams(window.location.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent(id));
    dispatch(getStudents(id));
    dispatch(getStudentsPending(id));
  }, []);

  const updateScore = (data) => {
    dispatch(inputStudentScore(data));
  };

  const removeStudent = (data) => {
    var cf = window.confirm('Bạn muốn xóa sinh viên này ra khỏi lớp?');
    if (!cf) return;
    dispatch(deleteStudent(data));
    alert('Xóa sinh viên thành công!');
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <SidebarLecturer />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <SearchBar />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <h3>{`${currentClass?.code} - ${currentClass?.subjectName?.toUpperCase()}`}</h3>
                  <hr />
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-block btn-success"
                    onClick={() => setIsOpenAddStudentModal(true)}
                  >
                    <i className="fa fa-plus"></i> Thêm sinh viên
                  </button>
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={() => setIsOpenInputMarkModal(true)}
                  >
                    <i className="fa fa-file-import"></i> Nhập điểm
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-block btn-warning">
                    <i className="fa fa-file-excel"></i> Xuất Excel
                  </button>
                </div>
                <div className="col-md-12" style={{ marginTop: '40px' }}>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th width="5%">STT</th>
                        <th width="20%">Họ tên sinh viên</th>
                        <th width="10%">Mã sinh viên</th>
                        <th width="10%">Điểm giữa kỳ</th>
                        <th width="10%">Điểm cuối kỳ</th>
                        <th width="10%"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentList?.length ? (
                        studentList.map((item, index) => (
                          <ClassdetailItem
                            key={item.studentCode}
                            number={index + 1}
                            id={item.studentCode}
                            name={item.fullname}
                            midterm={item.midterm}
                            final={item.final}
                            setCurrentStudent={() => setCurrentStudent({ ...item })}
                            showModalEditStudent={() => setIsOpenEditStudentModal(true)}
                            remove={() => removeStudent(item)}
                          />
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
              </div>
            </div>
            <AddStudentModal show={isOpenAddStudentModal} setShow={setIsOpenAddStudentModal} />
            <EditStudentModal
              show={isOpenEditStudentModal}
              setShow={setIsOpenEditStudentModal}
              studentInfo={currentStudent}
              updateScore={updateScore}
            />
            <InputMarkModal show={isOpenInputMarkModal} setShow={setIsOpenInputMarkModal} />
          </div>
          <Footer />
        </div>
      </div>
      <Link className="scroll-to-top rounded" to="#page-top">
        <i className="fas fa-angle-up"></i>
      </Link>
      <LogoutModal />
    </div>
  );
};

export default LecturerClassDetail;
