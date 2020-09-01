import React, {Component} from 'react';
import firebase from '../../config/Fire';
import {Link} from "react-router-dom";

class User extends Component{
 
  logout = () =>{
    firebase.auth().signOut();
  }
  
  render(){
    return(
      <div>
        <body>
        <div className='topnav'>
          <h1>Traffic Police Fining System</h1>
          <button className='logoutBtn' onClick ={this.logout}>Logout  <i class="fa fa-sign-out"></i></button>
        </div>
        <div className="select_user_block">
        <div className="body">
        <Link to="/Driver"> <button type="button" className='user_select_Btn'>Drivers</button></Link>
        <Link to="/Policeman"> <button type="button" className='user_select_Btn'>Policemen</button></Link>
        <Link to="/Policestation"> <button type="button" className='user_select_Btn'>Policestation</button></Link>
        </div>
        </div>
        </body>
      </div>
    );
  }
}

export default User;
