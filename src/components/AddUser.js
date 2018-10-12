import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            phone: "",
            permission: null,
            name: ""
        }
    }

    ischange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

        this.setState({
            name: (this.state.fname + " " + this.state.lname).trim()
        });
    }

    isShow = () => {
        if (this.props.showAddForm === true) {
            return (
                <div className="addForm">
                    <div className="boxForm">
                        <div className="modal-header">
                            <h1 className="modal-title text-center w-100" id="exampleModalLabel">Thêm nhân viên mới</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="col mb-3">
                                        <label>Họ</label>
                                        <input type="text" className="form-control is-invalid" name="fname" onChange={(event) => { this.ischange(event) }} placeholder="Thạch" required="required" />
                                        <div className="valid-feedback">
                                            OK!
                    </div>
                                    </div>
                                    <div className="col mb-3">
                                        <label>Tên</label>
                                        <input type="text" className="form-control is-invalid" name="lname" onChange={(event) => { this.ischange(event) }} placeholder="Tèo" required="required" />
                                        <div className="valid-feedback">
                                            OK!
                    </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col mb-3">
                                        <label>Số điện thoại</label>
                                        <input type="text" className="form-control is-valid" name="phone" onChange={(event) => { this.ischange(event) }} placeholder="09999999" />
                                    </div>
                                    <div className="form-group col mb-3">
                                        <label>Chọn quyền</label>
                                        <select className="form-control" name="permission" onChange={(event) => { this.ischange(event) }} id="">
                                            <option defaultValue>Phân cấp quyền</option>
                                            <option value={1}>Quản trị</option>
                                            <option value={2}>Nhân viên</option>
                                            <option value={3}>Quản lý</option>
                                            <option value={4}>Kiểm soát</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="cancle" className="btn btn-lg btn-secondary" onClick={() => this.props.changeState()}>Hủy</button>
                                    <button type="reset" className="btn btn-lg btn-primary"
                                        onClick={
                                            (name, phone, permission) => this.props.addUserFunc(this.state.name, this.state.phone, this.state.permission)
                                        }>Thêm mới</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {
                    this.isShow()
                }
            </div>

        )
    }
}

export default AddUser;