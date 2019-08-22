import React, { Component } from 'react';
import { Button, ButtonGroup, Link as Lin, Breakpoints, Colors } from 'react-foundation';
import { Link} from 'react-router-dom'; 



// import './style.css';

function TitlePage (props) {
        return (
            <div className="container">
                <div className="button-group-stack-example">
  <ButtonGroup stackFor={Breakpoints.SMALL}>
    <Lin color={Colors.SUCCESS}>How</Lin>
    {/* <Lin><Link to="/assessment"></Link>Low</Lin> */}
    <Lin class="is-active">Can</Lin>
    <Lin>You</Lin>
    <Lin>Go</Lin>
  </ButtonGroup>
                </div>

                {/* <div className="button-basics">
                    <Button>
                        <Link
                            color={Colors.SUCCESS}
                            to="/assessment"
                            className="btn btn-link"
                            role="button">
                            TOWER 1
                        </Link>
                    </Button> 
                <h1>Hello</h1>
                </div> */}
            </div>
        )
    }


export default TitlePage;


