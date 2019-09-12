import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: "",
        }
    }
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;      
        this.setState({
            [ten]: giatri,
        });       
        var item = {};
        item.name = this.state.name; 
        item.tel = this.state.tel; 
        item.Permission = this.state.Permission; 
        //console.log(item);
        
    }

    hienThi = () => {
        if(this.props.hienThiForm === false){
            return(
                <div className="col">
                    <div className="card border-secondary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Thêm mới user</div>
                        <form>
                        <div className="card-body text-secondary">
                            <div className="form-group">
                                <input type="text" className="form-control" name="name"  placeholder="Nhập tên" onChange={(event)=>this.isChange(event)}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="tel"  placeholder="Nhập số điện thoại" onChange={(event)=>this.isChange(event)}/>
                            </div>
                            <div className="form-group" >
                                <select className="form-control" name="Permission" onChange={(event)=>this.isChange(event)}>
                                <option>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modetrator</option>
                                <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={()=>this.props.addOb(this.state.name,this.state.tel,this.state.Permission)} value="Thêm mới"/>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>           
            )
        }
    }
    render() {        
        return (
            <div >
               {this.hienThi()}
             </div>
        );
    }
}

export default AddUser;