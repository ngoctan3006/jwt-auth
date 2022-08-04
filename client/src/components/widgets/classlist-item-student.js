import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentClasslistItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <tr id={this.props.id}>
        <td>
          <Link to={`/student/classdetail/${this.props.id}`}>{this.props.id}</Link>
        </td>
        <td>{this.props.subject}</td>
        <td>{this.props.semester}</td>
        <td>{this.props.address}</td>
        <td>
          <button className="btn btn-danger" onClick={this.deleteClass}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default StudentClasslistItem;
