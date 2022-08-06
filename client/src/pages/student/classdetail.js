import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarStudent from '../../components/sections/sidebar-student';
import { classSelector, getScore, outClass } from './studentSlice';

const StudentClassDetail = () => {
  const currentClass = useSelector(classSelector);
  const dispatch = useDispatch();
  const { id } = useParams(window.location.search);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getScore(id));
  }, []);

  const leaveClass = () => {
    var cf = window.confirm('Bạn muốn rời khỏi lớp này?');
    if (!cf) return;
    dispatch(outClass(currentClass.classCode));
    navigate('/student/classlist');
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
                <div className="col-md-10 mb-4">
                  <h3>
                    {currentClass?.classCode} - {currentClass?.subjectName?.toUpperCase()}
                  </h3>
                  <hr />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-block btn-danger" onClick={leaveClass}>
                    <i className="fa-solid fa-right-from-bracket"></i> Rời lớp
                  </button>
                </div>
                <div className="col-md-10"></div>
                <div className="col-md-6" style={{ marginTop: '40px' }}>
                  <table className="table table-striped" style={{ textAlign: 'center' }}>
                    <thead></thead>
                    <tbody>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Điểm giữa kỳ</td>
                        <td>Điểm cuối kỳ</td>
                      </tr>
                      <tr style={{ fontWeight: 'bolder', fontSize: '30px' }}>
                        <td>{currentClass.midterm || 'Chưa nhập'}</td>
                        <td>{currentClass.final || 'Chưa nhập'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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

export default StudentClassDetail;
