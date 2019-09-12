import React, { Component } from 'react';
import DataUserRow from './DataUserRow';

class TableData extends Component {
    editTable = () => {
        this.props.clickChange();
    }
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover">
                <thead>
                <tr className="text-center">
                    <th>STT </th>
                    <th>Tên </th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                
                <tbody>
                    {
                        this.props.dulieu.map((value, key) => {
                           
                            
                            return(
                                <DataUserRow 
                                editTableData={this.props.clickChange} 
                                editRow={(item)=>this.props.editData(value)} 
                                id={value.id}
                                key={key} 
                                soId={key}
                                 name={value.name} 
                                 tel={value.tel} 
                                 phanquyen={value.Permission} 
                                 deleteUser={(item)=>this.props.deleteUser(item)}/>
                                )
                        })
                    }
                </tbody>
            </table>
            </div>
        );
    }
}

export default TableData;