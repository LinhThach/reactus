import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            phone: "",
            permission: "",
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.editUserObject!==null){
        this.setState({
            fname: nextProps.editUserObject.name.split(' ', 2)[0],
            lname: nextProps.editUserObject.name.slice((nextProps.editUserObject.name.split(' ', 2)[0]).length).trim(),
            phone: nextProps.editUserObject.phone,
            permission: nextProps.editUserObject.permission,
        });            
        }
    }


    ischange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    checkUpdate = (value,defaultValue,event)=>{
        if(value!==defaultValue){
           this.ischange(event)
        }
    }

    saveBtn = () => {


        var info = {};
        info.id = this.props.editUserObject.id;
        info.name = this.state.fname.trim() + " " + this.state.lname.trim();
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        console.log(info.name);
        this.props.getUserInfo(info);
        this.props.changeFixState();
    }

    isShow = () => {
        
        if (this.props.showEditForm === true) {
          //  console.log(this.props.editUserObject.name.slice((this.props.editUserObject.name.split(' ', 2)[0]).length))
         // console.log(this.props.editUserObject)
            return (
                <div className="addForm">
                    <div className="boxForm">
                        <div className="modal-header">
                            <h1 className="modal-title text-center w-100" id="exampleModalLabel">Sửa thông tin nhân viên</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="col mb-3">
                                        <label>Họ</label>
                                        <input defaultValue={this.props.editUserObject.name.split(' ', 2)[0]} type="text" className="form-control is-invalid" name="fname" onChange={(event) => { this.ischange(event) }}
                                            required="required" />
                                        <div className="valid-feedback">
                                            OK!
                    </div>
                                    </div>
                                    <div className="col mb-3">
                                        <label>Tên</label>
                                        <input defaultValue={this.props.editUserObject.name.slice((this.props.editUserObject.name.split(' ', 2)[0]).length).trim()} type="text" className="form-control is-invalid" name="lname" onChange={(event) => { this.ischange(event) }} required="required" />
                                        <div className="valid-feedback">
                                            OK!
                    </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col mb-3">
                                        <label>Số điện thoại</label>
                                        <input defaultValue={this.props.editUserObject.phone} type="text" className="form-control is-valid" name="phone"
                                            onChange={(event) => { this.ischange(event) }} />
                                    </div>
                                    <div className="form-group col mb-3">
                                        <label>Chọn quyền</label>
                                        <select defaultValue={this.props.editUserObject.permission} className="form-control" name="permission" onChange={(event) => { this.ischange(event) }} id="">
                                            <option defaultValue>Phân cấp quyền</option>
                                            <option value={1}>Quản trị</option>
                                            <option value={2}>Nhân viên</option>
                                            <option value={3}>Quản lý</option>
                                            <option value={4}>Kiểm soát</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="cancle" className="btn btn-lg btn-secondary" onClick={() => this.props.changeFixState()}>Hủy</button>
                                    <button type="button" className="btn btn-lg btn-primary" onClick={() => this.saveBtn()}>Thay đổi</button>
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

export default EditUser;