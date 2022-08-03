import React from "react";

class EditClassModal extends React.Component {
    render() {
        return (
            <div
                className="modal fade"
                id="editClassModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby=""
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight: "bold"}}>
                                Thay đổi thông tin lớp học
                            </h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="editClassForm">
                                <div className="form-group">
                                    <label htmlFor="edit-class-id">Mã lớp học</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit-class-id"
                                        style={{width: "100%"}}
                                        value="103175"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edit-class-title">Tên môn học</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit-class-title"
                                        style={{width: "100%"}}
                                        value="Kỹ thuật lập trình"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edit-class-semester">Học kỳ</label>
                                    <select className="form-control" id="edit-class-semester">
                                        <option value="20221">20221</option>
                                        <option value="20222" selected>20222</option>
                                        <option value="20223">20223</option>
                                        <option value="20231">20231</option>
                                        <option value="20232">20232</option>
                                        <option value="20233">20233</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edit-class-room">Phòng học</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit-class-room"
                                        style={{width: "100%"}}
                                        value="D3-201"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-dismiss="modal">Bỏ qua</button>
                            <button className="btn btn-primary" data-dismiss="modal">Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditClassModal;
