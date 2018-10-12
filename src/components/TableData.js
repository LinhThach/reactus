import React, { Component } from 'react';
import ItemsTable from './ItemsTable';


class TableData extends Component {
    mappingDataUser = () =>
        this.props.dataUserProps.map((value, key) => {
            return (
                <ItemsTable
                    editUserFunc={(user) => this.props.editUser(value)}
                    showEditFrom={() => this.props.changeFixState()}
                    deleteUsFunc={(id)=>this.props.deleteUser(id)}
                    key={key}
                    id={value.id}
                    stt={key + 1}
                    name={value.name}
                    phone={value.phone}
                    permission={value.permission}
                >
                </ItemsTable>
            )
        });
    render() {

        return (
            <div className="container-fluid" >
                <div className="row mt-3 ">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className="table-primary text-center">
                                <th scope="col">STT</th>
                                <th scope="col">Họ và Tên</th>
                                <th scope="col">Điện thoại</th>
                                <th scope="col">Quyền</th>
                                <th scope="col align-self-end">Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.mappingDataUser()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TableData;