import React, { Component } from 'react';
// import { Button, Colors, ButtonGroup, Link, Breakpoints } from 'react-foundation';
import { Colors, Button } from 'react-foundation';
import { Link } from "react-router-dom";

// import './style.css';

function TitlePage (props) {
        return (
            // <div className="container">
            // <div className="button-group-stack-example">
            // <ButtonGroup stackFor={Breakpoints.SMALL}>

            <div className="container">
                {/* <div className="button-group"> */}
                    {/* <ButtonGroup isExpanded> */}
                        {/* <Link
                            onClick={(e) => { e.preventDefault(); this.clickHandle(); }}
                            color={Colors.SUCCESS}
                            to="/assessment"
                        >
                            TOWER 1
                        </Link> */}

                        {/* WORKING LINK */}
                        <div className="button-basics-example">
                            <Button color={Colors.SUCCESS}>TOWER1</Button>
                            <Link
                            // onClick={this.clickHandle()}
                            color={Colors.SUCCESS}
                            to="/assessment" 
                            role="button"
                            className="btn btn-link"
                        >TOWER 1
                        </Link>
    
                        
                        
                        {/* <Link 
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="userguide" href="/userguide">USERGUIDE</a>
            </Link>
            
            <Link
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="tower1" href="/assessment">TOWER 1</a>
            </Link>

            <Link
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="tower2" href="#">TOWER 2 (TBD)</a>
            </Link>

            <Link
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="tower3" href="#">TOWER 3 (TBD)</a>
            </Link>

            <Link
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="podium" href="#">RETAIL PODIUM (TBD)</a>
            </Link>
            
            <Link
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="assessments" href="/#">CURRENT FIRE RISK ASSESSMENT</a>
            </Link>
          
            <Link

            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="trending" href="#">FIRE RISK ASSESSMENT TRENDING</a>
            </Link> */}

                    {/* </ButtonGroup> */}
                </div>
                <h1>Hello</h1>
            </div>
        )
    }


export default TitlePage;

