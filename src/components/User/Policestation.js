
import React, {Component} from 'react';
import {db} from '../../config/Fire';
import firebase from '../../config/Fire';
import {Link} from "react-router-dom";




class Station extends Component{
  state={
    stations:null
  }


  componentDidMount(){
    db.collection('WebUsers')
      .get()
      .then(snapshot=>{
        const stations =[]
        snapshot.forEach(doc =>{
          const data=doc.data()
          stations.push(data)
        })
        this.setState({stations:stations})
        
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
        <Link to="/Policeman"> <button type="button" className='userBtn'>Policemen</button></Link>
        <Link to="/Policestation"> <button type="button" className='userBtnActive'>Policestation</button></Link>
        </div>
        </div>

        {this.state.stations &&
        this.state.stations.map(station=>{
        
         if (station.type!=="rta"){
          return(
            <div>
            
            <div className="details">
            
              <h3>Policestation ID:  {station.station_id}</h3>
              
              <h3>Region:  {station.region}</h3>
              <h3>Email:  {station.email}</h3>
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

export default Station;