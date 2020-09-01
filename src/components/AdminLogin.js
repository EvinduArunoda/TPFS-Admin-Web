// importing libraries
import React, {Component} from 'react';
import firebase from '../config/Fire';

// Creating a AdminLogin class
class AdminLogin extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      fireErrors: '',
    };
  }

// assigning values for each properties
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

// authenticate login with firebase database
  login = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error)=>{
        this.setState({fireErrors: error.message})
      });
  }

  render(){
    let errorNotification = this.state.fireErrors ? (<div className="Error">{this.state.fireErrors}</div>) : null;  //Handling logging in errore
  
    return(
      // login form
      <div>
        <div className='topnavlogin'>
          <h1><i className="fa fa-car"></i> Traffic Police Fining System</h1>
        </div>
        <div className="form_block">
          <div id="title">Admin Login</div>
          <div className="body">
            {errorNotification}
            <form>
              <input type="text" id="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email"/>
              <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password"/>
              <input data-testid="button" type="submit" className="loginBtn" onClick={this.login}label="Log In"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

//exporting 
export default AdminLogin;
