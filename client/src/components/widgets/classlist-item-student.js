import React from 'react';
import { Link } from 'react-router-dom';

const StudentClasslistItem = (props) => {
  return (
    <tr id={props.id}>
      <td>
        <Link to={`/student/classdetail/${props.id}`}>{props.id}</Link>
      </td>
      <td>{props.subject}</td>
      <td>{props.semester}</td>
      <td>{props.address}</td>
      <td>
        <button className="btn btn-danger" onClick={props.deleteClass}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </td>
    </tr>
  );
};

export default StudentClasslistItem;
