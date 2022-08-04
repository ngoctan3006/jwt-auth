import React, { Component } from 'react';

class AccountlistItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <tr id={this.props.id}>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.username}</td>
        <td>{this.props.role === 'Role_Lecturer' ? 'Giảng viên' : 'Sinh viên'}</td>
        <td>
          <button className="btn btn-danger" onClick={this.deleteAccount}>
            <i className="fa fa-fw fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default AccountlistItem;
