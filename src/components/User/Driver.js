
import React, {Component} from 'react';
import {db} from '../../config/Fire';
import firebase from '../../config/Fire';
import {Link} from "react-router-dom";




class Driver extends Component{
  state={
    drivers:null
  }


  componentDidMount(){
    db.collection('Drivers')
      .get()
      .then(snapshot=>{
        const drivers =[]
        snapshot.forEach(doc =>{
          const data=doc.data()
          drivers.push(data)
        })
        this.setState({drivers:drivers})
        
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
        <Link to="/Driver"> <button type="button" className='userBtnActive'>Drivers</button></Link>
        <Link to="/Policeman"> <button type="button" className='userBtn'>Policemen</button></Link>
        <Link to="/Policestation"> <button type="button" className='userBtn'>Policestation</button></Link>
        </div>
        </div>

        {this.state.drivers &&
        this.state.drivers.map(driver=>{
          return(
            <div>
            <div className="details">
            
              <h3>License Number:{driver.LicenseNumber}</h3>
              <h3>NIC Number:{driver.NIC}</h3>
              <h3>Email:{driver.emailaddress}</h3>
              </div>
              <hr></hr>
              </div>
            
             
          )
        })}

      </div>
    );
  }
}

export default Driver;