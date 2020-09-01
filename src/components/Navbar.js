import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
  
  render(){
    return(
      <div>
        <div class="sidebar" id='bar'>
        <Link to={"/"} ><i class="fa fa-home"></i> Home</Link>
        <Link to={"/Fine"}><i class="fa fa-newspaper-o"></i> Rules & Fines</Link>
        <Link to={"/RTA"}><i class="fa fa-id-card"></i> Add RTA</Link>
        <Link to={"/Users"}><i class="fa fa-users"></i> Users</Link>
        </div>

      

      </div>
    )
  }
}

export default Navbar;