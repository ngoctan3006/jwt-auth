import React, { Component } from 'react';

class StudentClasslistItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr id={this.props.id}>
        <td>
          <a href={`/student/classdetail/${this.props.id}`}>{this.props.id}</a>
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
