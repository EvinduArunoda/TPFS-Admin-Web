import React, { Component } from "react";
import { Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import AdminHome from "./AdminHome";
import Fine from "./Fine/Fine";
import RTA from "./RTA";
import User from "./User/Users";
import history from './../history';
import Driver from './User/Driver';
import Policeman from './User/Policeman';
import Station from './User/Policestation';

import CommonFine from "./Fine/CommonFine";
import CarFine from "./Fine/CarFine";
import MotorFine from "./Fine/MotorFine";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={AdminHome}/>
                    <Route exact path="/Fine" component={Fine} />
                    <Route exact path="/RTA" component={RTA} />
                    <Route exact path="/Users" component={User} /> 
                    <Route exact path="/Driver" component={Driver} /> 
                    <Route exact path="/Policeman" component={Policeman} /> 
                    <Route exact path="/Policestation" component={Station} /> 
                    <Route exact path="/CommonFine" component={CommonFine} /> 
                    <Route exact path="/CarFine" component={CarFine} /> 
                    <Route exact path="/MotorFine" component={MotorFine} /> 
                </Switch>
            </Router>
        )
    }
}