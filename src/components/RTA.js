import React, {Component} from 'react';
import firebase from '../config/Fire';
import {db} from '../config/Fire';
class RTA extends Component{

  state={
    rtas:null
  }

  success() {
    alert("successfully created new RTA");
  }

  componentDidMount(){
    db.collection('WebUsers')
      .get()
      .then(snapshot=>{
        const rtas =[]
        snapshot.forEach(doc =>{
          const data=doc.data()
          rtas.push(data)
        })
        this.setState({rtas:rtas})
        
      })
      .catch(error=>console.log(error));
      
  }

  constructor() {
    super();
    this.state = {
     address: '',
     email: '',
     phone:'',
     region:'',
     type:'rta'
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  addRta = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('WebUsers').add({
      address: this.state.address,
      email: this.state.email,
      phone:this.state.phone,
      region:this.state.region,
      type:this.state.type
    });  
    this.setState({
      address: '',
     email: '',
     phone:'',
     region:'',
     type:'rta'
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
          <div id="title">Add New RTA</div>
          <div className="body">
          
            <form onSubmit={this.addRta}>
              <input type="text" name="email" placeholder="Email" onChange={this.updateInput}
              value={this.state.email}/>
              <input type="text" name="address" placeholder="address" onChange={this.updateInput}
              value={this.state.address}/>
              <input type="text" name="region" placeholder="Region" onChange={this.updateInput}
              value={this.state.region}/>
              <input type="text" name="phone" placeholder="Telephone Number" onChange={this.updateInput}
              value={this.state.phone}/>
              {/* <input type="password" name="password" placeholder="Password"/> */}
              <button type="submit" onClick={this.success}className="loginBtn">Add RTA</button>
            </form>
          </div>
        </div>
        <hr ></hr>
      
      {this.state.rtas &&
        this.state.rtas.map(rta=>{
         if (rta.type!=="policeStation"){
          return(
            <div>
            
            <div className="details">
          
              
              <h3>Region:  {rta.region}</h3>
          <h3>Address: {rta.address}</h3>
              <h3>Email:  {rta.email}</h3>
              <h3>Telephone Number: {rta.phone}</h3>
              </div>
              <hr></hr>
              </div>
          )
            }
        })}
      </div>
    );
  }
}

export default RTA;