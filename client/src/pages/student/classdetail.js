import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarStudent from '../../components/sections/sidebar-student';

const StudentClassDetail = () => {
  const leaveClass = () => {
    var cf = window.confirm('Bạn muốn rời khỏi lớp này?');
    if (!cf) return;
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
                  <h3>103175 - KỸ THUẬT LẬP TRÌNH</h3>
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
                        <td>6.5</td>
                        <td>8.0</td>
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
