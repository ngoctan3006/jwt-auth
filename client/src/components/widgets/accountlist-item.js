import React from 'react';

const AccountlistItem = ({ id, name, username, role, deleteAccount }) => {
  return (
    <tr id={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{role === 'Role_Lecturer' ? 'Giảng viên' : 'Sinh viên'}</td>
      <td>
        <button className="btn btn-danger" onClick={deleteAccount}>
          <i className="fa fa-fw fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default AccountlistItem;
