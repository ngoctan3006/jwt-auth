import React, { Component } from 'react';

class ClassdetailItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr id={this.props.id}>
        <td>{this.props.number}</td>
        <td>{this.props.name}</td>
        <td>{this.props.id}</td>
        <td>{this.props.mark1}</td>
        <td>{this.props.mark2}</td>
        <td>
          <button className="btn btn-warning" data-toggle="modal" data-target="#editStudentModal">
            <i className="fa fa-fw fa-edit"></i>
          </button>
          <button className="btn btn-danger" onClick={this.deleteStudent}>
            <i className="fa fa-fw fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default ClassdetailItem;
