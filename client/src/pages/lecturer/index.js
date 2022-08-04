import React from 'react';
import { Link } from 'react-router-dom';
import LogoutModal from '../../components/modals/logout-modal';
import Footer from '../../components/sections/footer';
import SearchBar from '../../components/sections/searchbar';
import SidebarLecturer from '../../components/sections/sidebar-lecturer';

class LecturerHome extends React.Component {
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <SidebarLecturer />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <SearchBar />
              <div className="container-fluid"></div>
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

export default LecturerHome;
