
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="d-flex flex-sm-row justify-content-center">
                <img className="p-2 risk" src={require("../../../branding/FireRiskMatrix.jpg")} />
            </div>
            <div className="d-flex flex-sm-row justify-content-center">
                <div className="p-2">
                    <Link to="/" className="titlepage">Home</Link>
                </div>
            </div>
        </div>
    )
}


export default UserGuide;