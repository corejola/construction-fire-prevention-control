import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Weather from '../Weather/Weather';
import { Button } from 'react-foundation'

import './TitlePage.css'

const TitlePage = props => {
    return (
        <div className="container">
            <div className="d-flex flex-lg-row justify-content-center">
                <img className="p-2 brandName" src={require("../../../branding/Lendlease_Corporate_BrandName_RGB.png")} />
            </div>
            <Weather />
            <div className="d-flex flex-lg-row justify-content-center">
                <div className="p-2 paragraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="container">
                {/* <div className="d-flex flex-lg-row justify-content-center">
                    <img className="p-2 logo" src={require("../../../branding/Lendlease_Corporate_BrandName_RGB.png")} />
                </div>
                <div className="d-flex flex-lg-row justify-content-center">
                    <div className="p-2 paragraph">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div> */}

                <div className="d-flex flex-lg-row justify-content-center">
                    <div className="p-2">
                        <Link to="/userguide" className="submit">USER GUIDE</Link>
                    </div>
                </div>
                <div className="d-flex flex-lg-row justify-content-center">
                    <div className="p-2">
                        <Link to="/assessment" className="tower1">TOWER 1</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/weather" className="tower2">TOWER 2 (TBD)</Link>
                    </div>
                </div>
                <div className="d-flex flex-lg-row justify-content-center">
                    <div className="p-2">
                        <Link to="#" className="tower3">TOWER 3 (TBD)</Link>
                    </div>
                    <div className="p-2">
                        <Link to="#" className="podium">RETAIL PODIUM (TBD)</Link>
                    </div>
                </div>
                <div className="d-flex flex-lg-row justify-content-center">
                    <div className="p-2">
                        <Link to="/results" className="assessment">CURRENT FIRE RISK ASSESSMENT</Link>
                    </div>
                </div>
                <div className="d-flex flex-lg-row justify-content-center">
                    <div className="p-2">
                        <Link to="#" className="trending">FIRE RISK ASSESSMENT TRENDING</Link>
                    </div>
                </div>
                {/* <div className="d-flex flex-lg-row justify-content-center">
                    <div className="p-2">
                        <a href="#" onClick={props.logout} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                    </div>
                </div> */}
            </div>
            <div className="d-flex flex-lg-row justify-content-center">
                <div className="p-2">
                    <Button onClick={props.logout} className="LogOutButton">LogOut</Button>
                </div>
            </div>
        </div>
    )
}


export default TitlePage;


