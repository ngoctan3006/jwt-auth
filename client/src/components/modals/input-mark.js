import React from 'react';

class InputMarkModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="importMarkModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 'bold' }}>
                Nhập điểm sinh viên
              </h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="inputMarkForm">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th width="10%">STT</th>
                      <th width="25%">Họ tên</th>
                      <th width="10%">Mã sinh viên</th>
                      <th width="10%">Điểm GK</th>
                      <th width="10%">Điểm CK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nguyễn Văn C</td>
                      <td>20211140</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="mark1"
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="mark2"
                          style={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Nguyễn Văn C</td>
                      <td>20211140</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="mark1"
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="mark2"
                          style={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Nguyễn Văn C</td>
                      <td>20211140</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="mark1"
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="mark2"
                          style={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Bỏ qua
              </button>
              <button className="btn btn-primary" data-dismiss="modal">
                Nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputMarkModal;
