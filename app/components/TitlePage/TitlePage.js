import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Weather from '../Weather/Weather';
import { Button } from 'react-foundation';
import './TitlePage.css'

const TitlePage = props => {
    return (
        <div className="container">
            <div className="d-flex flex-sm-row justify-content-center">
                <img className="p-2 brandName" src={require("../../../branding/Lendlease_Corporate_BrandName_RGB.png")} />
            </div>
            <Weather />
            <div className="d-flex flex-sm-row justify-content-center">
                <div className="p-2 paragraph">
                    <h1> Construction Fire: Prevention &#38; Control</h1>
                    <hr />
                    {/* <h4>PROBLEM :</h4>
                    <p className="text"> There is a significant risk of fire during the construction phases of interior finishes, prior to building commissioning. 
                        
                        Proactive fire prevention application to help construction management teams assess the rist of construction fires during the lifecycle of a project.</p>

                    <h4>IDEA:</h4>
                    <p className="text">Create catalogue/data set of various risks associated with all activities (high and low risk); construction schedule that will be a baseline to feed into a digital application. This will be part of an AI/ML pursuit in that the data will feed into a selected app and which will create a smart dashboard and provide insights to the project teams. The idea is to shift the field focus from reactionary measures to more preventative controls. This concept makes our project teams smarter, more efficient and more proactive on identifying risks throughout the duration and flags potential blind spots.</p>
                    <hr /> */}
                </div>
            </div>
            <div className="container">

                <div className="d-flex flex-sm-row justify-content-center">
                    <div className="p-2">
                        <Link to="/userguide" className="submit">USER GUIDE</Link>
                    </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-center">
                    <div className="p-2">
                        <Link to="/assessment" className="tower1">TOWER 1</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/" className="tower2">TOWER 2 (TBD)</Link>
                    </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-center">
                    <div className="p-2">
                        <Link to="/" className="tower3">TOWER 3 (TBD)</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/" className="podium">RETAIL PODIUM (TBD)</Link>
                    </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-center">
                    <div className="p-2">
                        <Link to="/assessment/results" className="assessment">CURRENT FIRE RISK ASSESSMENT</Link>
                    </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-center">
                    <div className="p-2">
                        <Link to="/" className="trending">FIRE RISK ASSESSMENT TRENDING (TBD)</Link>
                    </div>
                </div>
                {/* <div className="d-flex flex-lg-row justify-content-center">
                    <div className="p-2">
                        <a href="#" onClick={props.logout} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                    </div>
                </div> */}
            </div>
            <div className="d-flex flex-sm-row justify-content-center">
                <div className="p-2">
                    <Button onClick={props.logout} className="logout">Log Out</Button>
                </div>
            </div>
        </div >
    )
}


export default TitlePage;


