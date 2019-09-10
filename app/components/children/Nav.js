// this is a travelsecure component, but we can utilize this as the baseline route for our NAVBAR

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

require('./nav.css');

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container nav-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
              <i className="fa fa-bars"></i>
            </button>
            <button type="button" className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target=".navbar-main-collapse1">
              <i className="glyphicon glyphicon-plus"></i>
            </button>
            <Link to={"/"} ><img className="icon-middle-nav-mobile" src={require("../../../branding/Lendlease_Corporate_Logo_RGB.png")} /></Link>
          </div>

          <div className="collapse navbar-collapse navbar-left navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>

              <li>
                <a className="page-scroll nav-left-text" href="/"><p>HOME</p></a>
              </li>
              <li>
                <a className="page-scroll nav-left-text" href="/userguide"><p>USER GUIDE</p></a>
              </li>
              {localStorage.getItem('authenticated') ? (
                <li>
                  <a href="#" onClick={this.props.logout} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                </li>
              ) : (
                  <li>
                    <Link to={"/login"} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGIN</p></div></Link>
                  </li>
                )}
            </ul>
          </div>
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>

              <li>
                <a className="page-scroll nav-right-text" href="/assessment/results">
                  <img className="navigation-icons" src={require("../../img/shapes/itinerary.png")} />
                  <p>TOWER 1</p>
                </a>
              </li>
              <li>
                <a className="page-scroll nav-right-text" href="/">
                  <img className="navigation-icons" src={require("../../img/shapes/itinerary.png")} />
                  <p>TOWER 2 (TBD)</p>
                </a>
              </li>
              <li>
                <a className="page-scroll nav-right-text" href="/">
                  <img className="navigation-icons" src={require("../../img/shapes/itinerary.png")} />
                  <p>TOWER 3 (TBD)</p>
                </a>
              </li>
              <li>
                <a className="page-scroll nav-right-text" href="/">
                  <img className="navigation-icons" src={require("../../img/shapes/itinerary.png")} />
                  <p>RETAIL PODIUM (TBD)</p>
                </a>
              </li>
              {this.props.authenticated ? (
                <li>
                  <a className="page-scroll nav-right-text" href="/users/sign-out" data-toggle="modal">
                    <img className="navigation-icons" src={require("../../img/shapes/search.png")} />
                    <p>SEARCH LOCATION</p>
                  </a>
                </li>
              ) : ""}

            </ul>
          </div>
          <Link to={"/"} ><img className="icon-middle-nav-desktop" src={require("../../../branding/Lendlease_Corporate_Logo_RGB.png")} /></Link>
        </div>
      </nav>
    );
  }
}