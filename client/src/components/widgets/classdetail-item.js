import React, { Component } from 'react';

class ClassdetailItem extends Component {
  render() {
    return (
      <tr id={this.props.id}>
        <td>{this.props.number}</td>
        <td>{this.props.name}</td>
        <td>{this.props.id}</td>
        <td>{this.props.midterm}</td>
        <td>{this.props.final}</td>
        <td>
          <button
            className="btn btn-warning mr-2"
            onClick={() => {
              this.props.setCurrentStudent();
              this.props.showModalEditStudent();
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

export default ClassdetailItem;
