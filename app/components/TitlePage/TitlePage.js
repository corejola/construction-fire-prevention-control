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
                <div className="d-flex flex-sm-row justify-content-center">
                    <div className="p-2">
                        <Button onClick={props.logout} className="logout">Log Out</Button>
                    </div>
                </div>
            </div>

        </div >
    )
}


export default TitlePage;


