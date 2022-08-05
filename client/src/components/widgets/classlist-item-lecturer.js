import React from 'react';
import { Link } from 'react-router-dom';

class LecturerClasslistItem extends React.Component {
  render() {
    return (
      <tr id={this.props.code}>
        <td>
          <Link to={`/lecturer/classdetail/${this.props.code}`}>{this.props.code}</Link>
        </td>
        <td>{this.props.subjectName}</td>
        <td>{this.props.semester}</td>
        <td>{this.props.room}</td>
        <td>
          <button
            className="btn btn-warning mr-2"
            onClick={() => {
              this.props.setCurrentClass(this.props.code);
              this.props.showModalEditClass();
            }}
          >
            <i className="fa fa-fw fa-edit"></i>
          </button>
          <button className="btn btn-danger" onClick={this.props.remove}>
            <i className="fa fa-fw fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default LecturerClasslistItem;
