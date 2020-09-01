import React, {Component} from 'react';
import {db} from '../../config/Fire';
import firebase from '../../config/Fire';
import {Link} from "react-router-dom";

class CommonFine extends Component{
  state={
    fines:null
  }

  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
  }

  componentDidMount(){
    db.collection('Fine')
      .get()
      .then(snapshot=>{
        const fines =[]
        snapshot.forEach(doc =>{
          const data=doc.data()
          fines.push(data)
         
          
        })
        this.setState({fines:fines})
        
      })
      .catch(error=>console.log(error));
      
  }
  
  delete(id){
    firebase.firestore().collection('Fine')
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
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
        
        <Link to="/CarFine"> <button type="button" className='userBtn'>Car/Van</button></Link>
        <Link to="/MotorFine"> <button type="button" className='userBtn'>Motor Cycle</button></Link>
        <Link to="/CommonFine"> <button type="button" className='userBtnActive'>Common</button></Link>
        </div>
        </div>
        
            {this.state.fines &&
        this.state.fines.map(fine=>{
          if (fine.type==="Common"){
            
          return(
            
              <div className="fine">
          <table>
            <tr>
              <th>Fine Code</th>
              
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr> 
              <tr>
          <td>{fine.finecode}</td>
              
              <td>{fine.description}</td>
              <td>{fine.amount}</td>
              <td class="action">< button class="delete" onClick={this.delete.bind(this, this.state.key)}><i class="fa fa-trash"></i></button></td>
              </tr>
              </table>
            </div>
          )
          }
        })}
              
         
       
    
             
    </div> 
  );
  }
}

export default CommonFine;
