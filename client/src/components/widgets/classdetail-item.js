import React from 'react';

const ClassdetailItem = (props) => {
  return (
    <tr id={props.id}>
      <td>{props.number}</td>
      <td>{props.name}</td>
      <td>{props.id}</td>
      <td>{props.midterm}</td>
      <td>{props.final}</td>
      <td>
        <button
          className="btn btn-warning mr-2"
          onClick={() => {
            props.setCurrentStudent();
            props.showModalEditStudent();
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

export default ClassdetailItem;
