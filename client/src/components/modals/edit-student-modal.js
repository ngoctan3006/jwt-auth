import React from "react";

class EditStudentModal extends React.Component {
    render() {
        return (
            <div class="modal fade" id="editStudentModal" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style={{fontWeight: "bold"}}>Thay đổi điểm sinh viên</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="editStudentForm">
                                <div class="form-group">
                                    <label>Mã sinh viên</label>
                                    <input type="text" class="form-control" style={{width: "100%"}} value="20211140" disabled />
                                </div>
                                <div class="form-group">
                                    <label>Họ tên sinh viên</label>
                                    <input type="text" class="form-control" style={{width: "100%" }} value="Nguyễn Văn C" disabled />
                                </div>
                                <div class="form-group">
                                    <label>Điểm giữa kỳ</label>
                                    <input type="text" class="form-control" id="mark1" style={{width: "100%"}} value="7.5" />
                                </div>
                                <div class="form-group">
                                    <label>Điểm cuối kỳ</label>
                                    <input type="text" class="form-control" id="mark2" style={{width: "100%"}} value="8.0" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">Bỏ qua</button>
                            <button class="btn btn-primary" data-dismiss="modal">Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStudentModal;