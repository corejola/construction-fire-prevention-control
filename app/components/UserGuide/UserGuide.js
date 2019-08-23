
import React, { Component } from 'react';
import './UserGuide.css'

const UserGuide = props => {
    return (
        <div className="container">
            <div className="d-flex flex-lg-row justify-content-center">
                <img className="p-2 logo" src={require("../../../branding/Lendlease_Corporate_BrandName_RGB.png")} />
            </div>
            <div className="d-flex flex-lg-row justify-content-center">
                <div className="p-2 paragraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="d-flex flex-lg-row justify-content-center">
                <img className="p-2 logo" src={require("../../../branding/FireRiskMatrix.jpg")} />
            </div>
        </div>
    )
}


export default UserGuide;