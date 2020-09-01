import React, {Component} from 'react';
import fire from './config/Fire';
import AdminLogin from './components/AdminLogin';

import Routes from './components/Routes';
import './App.css';



class App extends Component{
  
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authlistener();
  }

  authlistener(){
    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return(
      <div>
        {this.state.user ? (<Routes/>) : (<AdminLogin />)}  
      </div>
    );
  }
}

export default App;
