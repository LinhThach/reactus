import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Search from './components/Search';
import AddUser from './components/AddUser';
import TableData from './components/TableData';
import DataUser from './components/Data.json';
import EditUser from './components/EditUser';

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddForm: false,
      showEditForm: false,
      data: null,
      searchText: '',
      editUserObject: null,
    }

  }

  
  componentWillMount() {
    if(localStorage.getItem('userData')==null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    } else {
      this.setState({
        data : JSON.parse(localStorage.getItem('userData'))
      });
    }
  }
  

  isShowForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    }
    );
  }

  isShowFixForm = () => {
    this.setState({
      showEditForm: !this.state.showEditForm
    }
    );
  }

  searchFunc = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  addUserFunc = (name, phone, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.permission = parseInt(permission, 20);

    var items = this.state.data;

    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }

  editUser = (user) => {
    //console.log(user);
    this.setState({
      editUserObject: user
    });
  }

  getUserInfo = (us) => {
    //console.log(us);
    this.state.data.forEach((value,key)=>{
      if(value.id === us.id){
        value.name = us.name;
        value.phone = us.phone;
        value.permission = parseInt(us.permission,20);
      }
    })
        localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  deleteUser = (id) => {
    var tempData = this.state.data.filter(item => item.id !== id);
    this.setState({
      data : tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData));
   // console.log(tempData)
  }

  render() {

    var result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    });

    return (
      <div className="App">
        <Header></Header>
        <EditUser
          showEditForm={this.state.showEditForm}
          editUserObject={this.state.editUserObject}
          changeFixState={() => this.isShowFixForm()}
          getUserInfo={(us) => this.getUserInfo(us)}>
        </EditUser>
        <AddUser showAddForm={this.state.showAddForm}
          changeState={() => this.isShowForm()}
          addUserFunc={(name, phone, permission) => this.addUserFunc(name, phone, permission)}>
        </AddUser>
        <Search changeState={() => this.isShowForm()}
          searchFunc={(dl) => this.searchFunc(dl)}
        ></Search>
        <TableData dataUserProps={result}
          changeFixState={() => this.isShowFixForm()}
          editUser={(user) => this.editUser(user)}
          deleteUser={(id)=>this.deleteUser(id)}></TableData>
      </div>
    );
  }
}

export default App;
