import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JoinClassModal from '../../components/modals/join-class-modal';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarStudent from '../../components/sections/sidebar-student';
import StudentClasslistItem from '../../components/widgets/classlist-item-student';
import { classListSelector, getClasses, outClass } from './studentSlice';

const StudentClasslist = () => {
  const [isOpenJoinClassModal, setIsOpenJoinClassModal] = useState(false);
  const classList = useSelector(classListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClasses());
  }, []);

  const deleteClass = (code) => {
    var cf = window.confirm('Bạn muốn rời lớp này?');
    if (!cf) return;
    dispatch(outClass(code));
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <SidebarStudent />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <SearchBar />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-success"
                    style={{ width: '200px' }}
                    data-toggle="modal"
                    data-target="#registerModal"
                  >
                    <i className="fa fa-plus"></i> Đăng ký lớp học
                  </button>
                </div>
                <div className="col-md-12" style={{ marginTop: '40px' }}>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th width="5%">Mã lớp</th>
                        <th width="30%">Môn học</th>
                        <th width="20%">Học kỳ</th>
                        <th width="20%">Phòng</th>
                        <th width="10%"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {classList?.length ? (
                        classList.map((item) => (
                          <StudentClasslistItem
                            key={item.id}
                            code={item.classCode}
                            subject={item.subjectName}
                            semester={item.semester}
                            room={item.room}
                            deleteClass={() => deleteClass(item.classCode)}
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
            <JoinClassModal show={isOpenJoinClassModal} setShow={setIsOpenJoinClassModal} />
          </div>
          <Footer />
        </div>
      </div>
      <Link className="scroll-to-top rounded" to="#page-top">
        <i className="fas fa-angle-up"></i>
      </Link>
    </div>
  );
};

export default StudentClasslist;
