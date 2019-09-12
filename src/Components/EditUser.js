import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editTextForm.id,
            name: this.props.editTextForm.name,
            tel: this.props.editTextForm.tel,
            Permission: this.props.editTextForm.Permission,
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    render() {     
        //console.log(this.state);
           
        return (                         
            <div className="col-12">
                <form method="post">
                    <div className="card border-secondary text-white bg-warning mb-3 mt-2">
                    <div className="card-header text-center">Sửa USER</div>
                    
                    <div className="card-body text-secondary">
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editTextForm.name} type="text" className="form-control" name="name"  placeholder="Nhập tên" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editTextForm.tel} type="text" className="form-control" name="tel"  placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="form-group" >
                            <select onChange={(event) => this.isChange(event)} defaultValue={this.props.editTextForm.Permission} className="form-control" name="Permission">
                            <option>Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modetrator</option>
                            <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-block btn-primary"  value="Lưu" onClick={(name,tel,permission)=>this.props.clickChange(this.state.id,this.state.name, this.state.tel, this.state.Permission)}/>
                        </div>
                    </div>
                 </div>    
                </form>          
            </div>
                    
              
            
               
        );
    }
}

export default EditUser;