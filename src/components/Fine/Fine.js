import React, {Component} from 'react';
import {Link} from "react-router-dom";
import firebase from '../../config/Fire';


class Fine extends Component{
  
  success() {
    alert("successfully added new Fine");
  }
  

  constructor() {
    super();
    this.state = {
     amount: '',
     description: '',
     finecode:'',
     type:''
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  addFine = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
  db.collection('Fine').add({
      amount: this.state.amount,
      description: this.state.description,
      finecode:this.state.finecode,
      type:this.state.type
    });  
    this.setState({
      amount: '',
      description: '',
      finecode:'',
      type:''
    });
  };

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
        <div className="form_block_RTA">
          <div id="title">Add a New Fine </div>
            <div className="body">
            <form onSubmit={this.addFine}>
              <input type="text" name="finecode" placeholder="Finecode" onChange={this.updateInput}
              value={this.state.finecode}/>

<input type="text" name="type" placeholder="VehicleType" onChange={this.updateInput}
              value={this.state.type}/>

              <input type="text" name="description" placeholder="Description" onChange={this.updateInput}
    value={this.state.description}/>

              <input type="text" name="amount" placeholder="Amount" onChange={this.updateInput}
    value={this.state.amount}/>

              <button type="submit" onClick={this.success}className="loginBtn" >Add Fine</button>
            </form>
          </div>
        </div>
        <div className="select_fine_block">
        <div className="body">
        <Link to="/CommonFine"> <button type="button" className='fine_select_Btn'>Common Fines</button></Link>
        <Link to="CarFine"> <button type="button" className='fine_select_Btn'>Fines for Car</button></Link>
        <Link to="/MotorFine"> <button type="button" className='fine_select_Btn'>Fines for Motorcycle</button></Link>
        </div>
        </div>
        </div> 
  );
  }
}

export default Fine;
