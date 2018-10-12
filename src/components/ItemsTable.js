import React, { Component } from 'react';

class ItemsTable extends Component {
    userPermission = (value) => {
        var valueStr = "";
        switch (value) {
            case 1:
                valueStr = "Quản trị";
                break;
            case 2:
                valueStr = "Nhân viên";
                break;
            case 3:
                valueStr = "Quản lý";
                break;
            case 4:
                valueStr = "Kiểm soát";
                break;

            default:
                break;
        }
        return valueStr;
    }
    render() {
        return (
            
            <tr className="table-striped table-hover text-center align-self-center">
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.userPermission(this.props.permission)}</td>
                <td className="align-self-end">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-sm btn-warning" onClick={()=>{
                            this.props.editUserFunc();
                            this.props.showEditFrom();                           
                        }}><i className="fa fa-pencil-square-o" aria-hidden="true" />Sửa</button>
                        <button type="button" className="btn btn-sm btn-info"><i className="fa fa-eye" aria-hidden="true" />Xem</button>
                        <button type="button" className="btn btn-sm btn-danger" onClick={(id)=>this.props.deleteUsFunc(this.props.id)}><i className="fa fa-trash" aria-hidden="true" />Xóa</button>
                    </div>
                </td>
            </tr>

        );
    }
}

export default ItemsTable;