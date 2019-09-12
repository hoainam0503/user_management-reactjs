import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from "./Data.json";

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      trangthai: true,
      data: [],
      searchText: '',
      editUserStatus: false,
      editTextForm: {},
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }

    
  }
  
  thaydoiEditUserSTT = (id,name,tel,permission) => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
    var item = {};
    item.id = id;
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    console.log(item);
    this.state.data.forEach((value, key) => {
      if(value.id === item.id){
        value.name = item.name;
        value.tel = item.tel;
        value.Permission = item.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data))
  }

  thaydoiTrangThai = () => {
    this.setState({
      trangthai: !this.state.trangthai
    })
  }

  editUser = (item) => {
    console.log("connect success");
    this.setState({
      editTextForm: item,
    });

  }

  thongBao = (dl) =>{
    this.setState({
      searchText: dl
    })    
  }
   addObject = (name,tel,Permission) => {
      //Tạo 1 đối tượng để đóng gói các dữ liệu vừa nhận được vào đối tượng đó và truyền cho app thông qua hàm tạo ở app
      var item = {};
      item.id = uuidv1();
      item.name = name;
      item.tel = tel;
      item.Permission = Permission;
      var arrTemp = this.state.data;
      arrTemp.push(item);
      this.setState({
        data: arrTemp
      });
      localStorage.setItem('userData', JSON.stringify(arrTemp))
      //console.log(DataUser);
      
      
      //tạo data trung gian
      // var items = this.state.data;
      // items.push(item);
      // this.setState({
      //   data: items
      // });
      
   }
  //  editObject = (name,tel,permission)=>{
  //    var item = {};
  //    item.name = name;
  //    item.tel = tel;
  //    item.permission = permission;
  //    //console.log(item);
     
  //  }
   deleteUser = (item) => {
    var arrTemp = this.state.data;
    arrTemp = arrTemp.filter((items)=> items.id !== item)
    console.log(arrTemp);
    this.setState({
      data: arrTemp
    });
    localStorage.setItem('userData', JSON.stringify(arrTemp))
   }
  render(){
    //tạo một mảng trung gian để lưu các giá trị tìm kiếm
    var ketqua = []; 
    //Duyệt mảng phần tử trong data bằng hàm forEach
    this.state.data.forEach((item) => {
      //indexOf dùng để tìm phần tử có trong mảng hay k, -1 có nghĩ là không có phần tử
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    //console.log(ketqua);
    
  return (
    <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
              <Search 
              editTextForm={this.state.editTextForm}
              dulieu={ketqua} 
              eidtUserSearch={this.state.editUserStatus} 
              thaydoiTrangThai={this.thaydoiTrangThai} 
              hienThiForm={this.state.trangthai} 
              getSearch={(dl) => this.thongBao(dl)}
              clickChange={(id,name,tel,permission)=>this.thaydoiEditUserSTT(id,name,tel,permission)}
              />
              {/* trong TableData truyền vào mảng ketqua ở trên để hiển thị ra màn hình */}
              <TableData
               deleteUser = {(item)=>this.deleteUser(item)}
              dulieu={ketqua} 
              editData={(item)=>this.editUser(item)} 
              clickChange={()=>this.thaydoiEditUserSTT()}/>
              <AddUser 
              hienThiForm={this.state.trangthai} 
              addOb={(name,tel,Permission) => this.addObject(name,tel,Permission)}/>
          </div>
        </div>
      </div>
    </div>
  );
}}

export default App;
