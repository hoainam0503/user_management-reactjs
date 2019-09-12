import React, { Component } from 'react';

class DataUserRow extends Component {
    showPermission = () => {
        if(this.props.phanquyen === "1") {return "Admin ";}
        else if(this.props.phanquyen === "2") {return "Modetrator ";}
        else {return "Normal";}        
    }
    editClick = () => {
        this.props.editRow();
        this.props.editTableData();
    }
    render() {

        return (
            
            <tr className="text-center">
            <td >{this.props.soId + 1}</td>
            <td>{this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>{this.showPermission()}</td>
            <td>
            <div className="btn-group">
                <div className="btn btn-primary sua">
                <i className="fa fa-edit" onClick={this.editClick}>Sửa</i>
                </div>
                <div className="btn btn-danger xoa">
                <i className="fa fa-trash" onClick={(item)=>this.props.deleteUser(this.props.id)}>Xóa</i>
                </div>
            </div>
            </td>
        </tr>
         
        );
    }
}

export default DataUserRow;