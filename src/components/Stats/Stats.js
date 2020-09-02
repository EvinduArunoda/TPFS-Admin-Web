import React, {Component} from 'react';
import {Link} from "react-router-dom";
import firebase from '../../config/Fire';
import {Line} from 'react-chartjs-2';



  const state = {
    labels: ['Common', 'Car', 'Motorcycle',
             ],
    datasets: [
      {
        label: 'Violations',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(0,0,25,1)',
        borderWidth: 3,
        data: [2,1,3]
      }
    ]
  }
  

 
  class Stats extends Component{
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
        <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'No of Violations',
              fontSize:20,
              fontColor:'rgba(0,0,25)'
            },
            legend:{
              display:true,
              position:'right'
            },
            layout: {
              padding: {
                  left: 250,
                  right: 200,
                  top: 50,
                  bottom: 100
              }
          },
          scales: {
            yAxes: [{
                ticks: {
                    max: 5,
                    min: 0,
                    stepSize: 1
                }
            }]
        }
          }}
        />
      </div>
        </div> 
  );
  }
}

export default Stats;
