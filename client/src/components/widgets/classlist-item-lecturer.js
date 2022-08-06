import React from 'react';
import { Link } from 'react-router-dom';

const LecturerClasslistItem = (props) => {
  return (
    <tr id={props.code}>
      <td>
        <Link to={`/lecturer/classdetail/${props.code}`}>{props.code}</Link>
      </td>
      <td>{props.subjectName}</td>
      <td>{props.semester}</td>
      <td>{props.room}</td>
      <td>
        <button
          className="btn btn-warning mr-2"
          onClick={() => {
            props.setCurrentClass(props.code);
            props.showModalEditClass();
          }}
        >
          <i className="fa fa-fw fa-edit"></i>
        </button>
        <button className="btn btn-danger" onClick={props.remove}>
          <i className="fa fa-fw fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default LecturerClasslistItem;
