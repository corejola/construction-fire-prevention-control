
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserGuide.css';
import Nav from "../children/Nav"

const UserGuide = props => {
    return (
        <div className="container">
            {/* <div className="d-flex flex-sm-row justify-content-center">
                <img className="p-2 brandName" src={require("../../../branding/Lendlease_Corporate_BrandName_RGB.png")} />
            </div> */}
            <Nav />
            <div className="d-flex flex-sm-row justify-content-center">
                <div className="p-2 paragraph">
                    <h2>Construction Fire: Prevention &#38; Control</h2>
                    <hr />
                    <h4>ABOUT:</h4>
                    <p className="text">The Construction Fire and Prevention Control application is a step forward in creating an overall fire preparedness and risk assessment trend tracking tool for various types of construction projects across the Lendlease landscape, from Residential High Rises to DOD Housing.</p>
                    <p className="text">There is a significant risk of fire during the construction phases of interior finishes, prior to building commissioning. The Construction Fire and Prevention Control application provides a proactive fire prevention application to help construction management teams assess the risk of construction fires during the lifecycle of a project.</p>
                    <p className="text">The intent is provide construction management field teams an accessible and user friendly way to input fire readiness data and visualizations that illustrate dynamic results, allowing workers to be proactive about fire safety preparedness. The information recorded will help in creating a catalogue/data set of various risks associated with all activities (high and low risk). Future phases will be part of an AI/ML pursuit in that the data will feed into the app and will create a smart dashboard and provide insights to the project teams.</p>

                    <h4>THE APPLICATION:</h4>
                    <p className="text">The application enables users to toggle between yes/no options regarding key fire safety components on each floor for each tower. Results are displayed in a dashboard. All data inputs are tracked and can review the trend over the life cycle of a project.</p>

                    <hr />
                </div>
            </div>

            <div className="d-flex flex-sm-row justify-content-center">
                <div className="p-2 paragraph">
                    <h3> How to use the Construction Fire Prevention &#38; Control App:</h3>
                    <ol>
                        <li>Select Tower to review (Only T1 is available for Demo).</li>
                        <li>Walk a level to observe the current field conditions as they relate to the presence of fire extinguishers, smoke/fire alarms, smoke/fire detetion, fire risers &#38; a clear path of egress.</li>
                        <li>Tag the item/items on the level you observe and click submit.</li>
                        <li>The app will determine the current fire risk condition for that level.</li>
                        <li>To review the results for the entire tower, head over to the "Current Fire Risk Assessment" page.</li>
                    </ol>
                </div>
            </div>
            {/* <div className="d-flex flex-lg-row justify-content-center">
                <img className="p-2 risk" src={require("../../../branding/FireRiskMatrix.jpg")} />
            </div> */}
            {/* <div className="d-flex flex-lg-row justify-content-center">
                <div className="p-2">
                    <Link to="/" className="titlepage">Home</Link>
                </div>
            </div> */}
        </div >
    )
}


export default UserGuide;