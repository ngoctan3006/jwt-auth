import React from 'react';
import { Link } from 'react-router-dom';
import AddStudentModal from '../../components/modals/add-student-modal';
import EditStudentModal from '../../components/modals/edit-student-modal';
import InputMarkModal from '../../components/modals/input-mark';
import LogoutModal from '../../components/modals/logout-modal';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarLecturer from '../../components/sections/sidebar-lecturer';
import ClassdetailItem from '../../components/widgets/classdetail-item';

class LecturerClassDetail extends React.Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    var cf = window.confirm('Bạn muốn xóa sinh viên này ra khỏi lớp?');
    if (!cf) return;
  }

  render() {
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
                    <h3>103175 - KỸ THUẬT LẬP TRÌNH</h3>
                    <hr />
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-block btn-success"
                      data-toggle="modal"
                      data-target="#addStudentModal"
                    >
                      <i className="fa fa-plus"></i> Thêm sinh viên
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-block btn-primary"
                      data-toggle="modal"
                      data-target="#importMarkModal"
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
                        <ClassdetailItem
                          number="1"
                          id="20211140"
                          name="Nguyễn Văn C"
                          mark1="7.5"
                          mark2="8.0"
                        />
                        <ClassdetailItem
                          number="2"
                          id="20211140"
                          name="Nguyễn Văn C"
                          mark1="7.5"
                          mark2="8.0"
                        />
                        <ClassdetailItem
                          number="3"
                          id="20211140"
                          name="Nguyễn Văn C"
                          mark1="7.5"
                          mark2="8.0"
                        />
                        <ClassdetailItem
                          number="4"
                          id="20211140"
                          name="Nguyễn Văn C"
                          mark1="7.5"
                          mark2="8.0"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <AddStudentModal />
              <EditStudentModal />
              <InputMarkModal />
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
  }
}

export default LecturerClassDetail;
