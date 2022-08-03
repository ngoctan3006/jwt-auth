import React, { Component } from "react";

class ChangePasswordModal extends Component {
    render() {
        return (
            <div
                className="modal fade"
                id="changePassModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby=""
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight: "bold"}}>
                                Thay đổi mật khẩu
                            </h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="change-password" onsubmit="changePassword(event)">
                                <div className="form-group">
                                    <label>Nhập mật khẩu cũ</label>
                                    <input type="password" className="form-control" id="old-pass" />
                                </div>
                                <div className="form-group">
                                    <label>Nhập mật khẩu mới</label>
                                    <input type="password" className="form-control" id="new-pass" />
                                </div>
                                <div className="form-group">
                                    <label>Nhập lại mật khẩu mới</label>
                                    <input type="password" className="form-control" id="cf-pass" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-dismiss="modal">Bỏ qua</button>
                            <button className="btn btn-primary">
                                Thay đổi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePasswordModal;