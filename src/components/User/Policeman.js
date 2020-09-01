
import React, {Component} from 'react';
import {db} from '../../config/Fire';
import firebase from '../../config/Fire';
import {Link} from "react-router-dom";




class Policeman extends Component{
  state={
    policemen:null
  }


  componentDidMount(){
    db.collection('PoliceMen')
      .get()
      .then(snapshot=>{
        const policemen =[]
        snapshot.forEach(doc =>{
          const data=doc.data()
          policemen.push(data)
        })
        this.setState({policemen:policemen})
        
      })
      .catch(error=>console.log(error));
      
  }
  
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
        
        <div className="user_block">
        <div className="body">
        <Link to="/Driver"> <button type="button" className='userBtn'>Drivers</button></Link>
        <Link to="/Policeman"> <button type="button" className='userBtnActive'>Policemen</button></Link>
        <Link to="/Policestation"> <button type="button" className='userBtn'>Policestation</button></Link>
        </div>
        </div>
        {this.state.policemen &&
        this.state.policemen.map(policeman=>{
          return(
            <div>
            <div className="details">
              <h3>Employee ID:{policeman.employee_id}</h3>
              <h3>Policestation ID:{policeman.station_id}</h3>
              <h3>Email ID:{policeman.mail_id}</h3>
              </div>
              <hr></hr>
            </div>
          )
        })}

      </div>
    );
  }
}

export default Policeman;