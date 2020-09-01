import React, {Component} from 'react';
import firebase from '../config/Fire';

class AdminHome extends Component {

  logout = () =>{
  firebase.auth().signOut();
}
  render(){
    return(
      <div>
        <div className='topnav'>
          <h1>Traffic Police Fining System</h1>
          <button className='logoutBtn' onClick ={this.logout}>Logout  <i class="fa fa-sign-out"></i></button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h2>Hi Admin!</h2>
      </div>
    )
  }
}

export default AdminHome;