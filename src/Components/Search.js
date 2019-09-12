import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ""
        }
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return <div className="btn  btn-outline-info " onClick={this.props.thaydoiTrangThai}>Thêm mới</div>
        }else{
            return <div className="btn btn-outline-secondary " onClick={this.props.thaydoiTrangThai}>Dong lại</div>
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        
        this.setState({
          tempValue: event.target.value
    })
    this.props.getSearch(event.target.value);
    }

    showEditForm = () => {
        if(this.props.eidtUserSearch === true){
           return  <EditUser editDataSearch={this.props.dulieu} 
                            clickChange={(id,name,tel,permission)=>this.props.clickChange(id,name,tel,permission)}
                            editTextForm={this.props.editTextForm}
                            />
        }
    }
    render() {
        //console.log(this.props.dulieu);
        
       return (
            
            <div className="col-12">
                {this.showEditForm()}
                <div className="form-group">
                    <div className="btn-group" style={{width: '600px'}}>
                    <input type="text" className="form-control"  placeholder="Nhập ten tìm kiếm" name="fSearch" onChange={(event) => this.isChange(event)}/>
                    <button type="submit" className="btn btn-info" onClick={(dl) => this.props.getSearch(this.state.tempValue)}>Tìm</button>
                    </div>
                    
                    {this.hienThiNut()}
                </div>
                <hr />
            </div>

        );
    }
}

export default Search;