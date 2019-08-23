import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, Redirect
} from 'react-router-dom'
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import axios from 'axios';
import Assessment from "./Assessment/index";
import TitlePage from './TitlePage/TitlePage';
import UserGuide from './UserGuide/UserGuide';
import PrivateRoute from "./utils/PrivateRoute";
import Weather from './Weather/Weather';

export default class MainRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
  }

  authenticate() {
    this.setState({
      authenticated: true
    })
  }

  deAuthenticate() {
    this.setState({
      authenticated: false
    })
  }

  logout() {
    axios.get('/apis/users/logout')
      .then(function (data) {
        this.deAuthenticate();
        localStorage.removeItem("authenticated");
        window.location.reload();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" render={props =>
            <Main
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} */}
          <PrivateRoute
            exact
            path="/"
            component={TitlePage}
            authenticate={this.authenticate}
            deAuthenticate={this.deAuthenticate}
            authenticated={this.state.authenticated}
            logout={this.logout}
          />
          />
          <Route strict exact path="/login" render={props =>
            <Login
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          <Route strict exact path="/signup" render={props =>
            <Signup
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          {/* <Route strict exact path="/titlepage" component={TitlePage}
          /> */}
          <Route strict exact path="/userguide" component={UserGuide}
          />
          <Route strict exact path="/weather" component={Weather}
          />
          <Route strict exact path="/assessment" component={Assessment} />
        </Switch>
      </Router>
    );
  }
}