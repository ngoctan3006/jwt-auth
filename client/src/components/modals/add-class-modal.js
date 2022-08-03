import React from 'react';

class AddClassModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="addClassModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 'bold' }}>
                Thêm lớp học mới
              </h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="addClassForm">
                <div className="form-group">
                  <label htmlFor="class-id">Mã lớp học</label>
                  <input
                    type="text"
                    className="form-control"
                    id="class-id"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="class-title">Tên môn học</label>
                  <input
                    type="text"
                    className="form-control"
                    id="class-title"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="class-semester">Học kỳ</label>
                  <select className="form-control" id="class-semester">
                    <option value="20221">20221</option>
                    <option value="20222">20222</option>
                    <option value="20223">20223</option>
                    <option value="20231">20231</option>
                    <option value="20232">20232</option>
                    <option value="20233">20233</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="class-room">Phòng học</label>
                  <input
                    type="text"
                    className="form-control"
                    id="class-room"
                    style={{ width: '100%' }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Bỏ qua
              </button>
              <button className="btn btn-primary" data-dismiss="modal">
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddClassModal;
