import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, Redirect
} from 'react-router-dom'
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Pricing from "./Pricing";
import axios from 'axios';
import Assessment from "./Assessments";
import PrivateRoute from "./utils/PrivateRoute";

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
            component={Main}
            authenticate={this.authenticate}
            deAuthenticate={this.deAuthenticate}
            authenticated={this.state.authenticated}
            logout={this.logout}
          />
          />
          <Route exact path="/login" render={props =>
            <Login
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          <Route exact path="/signup" render={props =>
            <Signup
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          <Route path="/pricing" render={props =>
            <Pricing
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          {/* <Route exact path="/assessment" render={props =>
            this.state.authenticated ?
              (<Assessment
              />) :
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location }
                }} /> */}
          {/* <PrivateRoute exact path="/assessment" component={Assessment} /> */}
          <Route exact path="/assessment" component={Assessment} />
          } />
        </Switch>
      </Router>
    );
  }
}