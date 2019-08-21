import React, {Component} from 'react';
import {Button, Colors, ButtonGroup, Link} from 'react-foundation';
// import './style.css';

class TitlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isClicked: false
    }
    }

    clickHandle() {
        console.log(`submit clicked`)
        this.setState(prevState => (
            {isClicked: !prevState.isClicked}
            ))
        alert("You are being redirected")
    }

    render() {

        return (
            <div className="container">
            <div className="button-group">  
            <ButtonGroup isExpanded>
            <Link 
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="userguide" href="/userguide">USERGUIDE</a>
            </Link>

            <Link
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="tower1" href="/tower1">TOWER 1</a>
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
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="assessments" href="/assessments">CURRENT FIRE RISK ASSESSMENT</a>
            </Link>

            <Link
            onClick={(e) => {e.preventDefault(); this.clickHandle();}} color={Colors.SUCCESS}><a className="trending" href="#">FIRE RISK ASSESSMENT TRENDING</a>
            </Link>

            </ButtonGroup>
            </div>
              <h1>Hello</h1>  
            </div>
        )
    }
}

export default TitlePage;

