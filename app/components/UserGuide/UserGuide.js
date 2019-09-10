
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserGuide.css'

const UserGuide = (props) => {
    return (
        <div className="container">
            <div className="d-flex flex-sm-row justify-content-center">
                <img className="p-2 brandName" src={require("../../../branding/Lendlease_Corporate_BrandName_RGB.png")} />
            </div>
            <div className="d-flex flex-sm-row justify-content-center">
                <div className="p-2 paragraph">
                    <h3> How to use the app.</h3>

                    <ol>
                        <h5><li>Select Tower to review (Only T1 is available for Demo).</li></h5>
                        <h5><li>Walk a level to observe the current field conditions as they relate to the presence of fire extinguishers, smoke/fire alarms, smoke/fire detetion, fire risers &#38; a clear path of egress.</li></h5>
                        <h5><li>Tag the item/items on the level you observe and click submit.</li></h5>
                        <h5><li>The app will determine the current fire risk condition for that level.</li></h5>
                        <h5><li>To review the results for the entire tower, head over to the "Current Fire Risk Assessment" page.</li></h5>
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