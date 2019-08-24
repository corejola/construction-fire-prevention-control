
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserGuide.css'

const UserGuide = props => {
    return (
        <div className="container">
            <div className="d-flex flex-sm-row justify-content-center">
                <img className="p-2 brandName" src={require("../../../branding/Lendlease_Corporate_BrandName_RGB.png")} />
            </div>
            <div className="d-flex flex-sm-row justify-content-center">
                <div className="p-2 paragraph">
                    <h3> How to use the app.</h3>

                    <ol>
                        <h4><li>Select Tower to review</li></h4>
                        <li><h4>Walk the level to observe the current field conditions as the relate to the presence of fire extinguishers, smoke/fire alarms, smoke/fire detetion, fire risers &#38; a clear path of egress </h4></li>
                        <li><h4>Tag the item on the level you are on and click submit</h4></li>
                        <li><h4>The app will determine the current fire risk condition for that level </h4></li>
                    </ol>

                </div>
            </div>
            {/* <div className="d-flex flex-lg-row justify-content-center">
                <img className="p-2 risk" src={require("../../../branding/FireRiskMatrix.jpg")} />
            </div> */}
            <div className="d-flex flex-lg-row justify-content-center">
                <div className="p-2">
                    <Link to="/" className="titlepage">Home</Link>
                </div>
            </div>
        </div >
    )
}


export default UserGuide;