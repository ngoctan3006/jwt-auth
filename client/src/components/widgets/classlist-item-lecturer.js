import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LecturerClasslistItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <tr id={this.props.id}>
        <td>
          <Link to={`/lecturer/classdetail/${this.props.id}`}>{this.props.id}</Link>
        </td>
        <td>{this.props.subject}</td>
        <td>{this.props.semester}</td>
        <td>{this.props.address}</td>
        <td>
          <button className="btn btn-warning" data-toggle="modal" data-target="#editClassModal">
            <i className="fa fa-fw fa-edit"></i>
          </button>
          <button className="btn btn-danger" onClick={this.deleteClass}>
            <i className="fa fa-fw fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default LecturerClasslistItem;
