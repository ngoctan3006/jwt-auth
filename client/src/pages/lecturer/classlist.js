import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddClassModal from '../../components/modals/add-class-modal';
import EditClassModal from '../../components/modals/edit-class-modal';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarLecturer from '../../components/sections/sidebar-lecturer';
import LecturerClasslistItem from '../../components/widgets/classlist-item-lecturer';
import {
  classListSelector,
  createClass,
  deleteClass,
  getClasses,
  updateClass,
} from './lecturerSlice';

const LecturerClasslist = () => {
  const [currentClass, setCurrentClass] = useState({});
  const [isOpenAddClassModal, setIsOpenAddClassModal] = useState(false);
  const [isOpenEditClassModal, setIsOpenEditClassModal] = useState(false);
  const classList = useSelector(classListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClasses());
  }, []);

  const addClass = (formData) => {
    dispatch(createClass(formData));
  };

  const updateInfo = (id, data) => {
    dispatch(updateClass(id, data));
  };

  const remove = (id) => {
    var cf = window.confirm('Bạn muốn xóa lớp này?');
    if (!cf) return;
    dispatch(deleteClass(id));
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
                <div className="col-md-12">
                  <button
                    className="btn btn-success"
                    style={{ width: '200px' }}
                    onClick={() => setIsOpenAddClassModal(true)}
                  >
                    <i className="fa fa-plus"></i> Thêm lớp học mới
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
                          <LecturerClasslistItem
                            key={item.code}
                            code={item.code}
                            subjectName={item.subjectName}
                            semester={item.semester}
                            room={item.room}
                            setCurrentClass={() => setCurrentClass({ ...item })}
                            showModalEditClass={() => setIsOpenEditClassModal(true)}
                            remove={() => remove(item.id)}
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
            <AddClassModal
              show={isOpenAddClassModal}
              setShow={setIsOpenAddClassModal}
              add={addClass}
            />
            <EditClassModal
              classInfo={currentClass}
              update={updateInfo}
              show={isOpenEditClassModal}
              setShow={setIsOpenEditClassModal}
            />
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

export default LecturerClasslist;
