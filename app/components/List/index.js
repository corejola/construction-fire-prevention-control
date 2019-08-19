import React, { Component } from 'react'
// CSS for horizontal list
import { Button, Switch, ButtonGroup, Breakpoints } from 'react-foundation';

class List extends Component {

    state = {
        extinguisher: false,
        alarms: false,
        detection: false,
        risers: false,
        egress: false,
        riskAssessment: ""
        // risk assessment can be a function of the sum of the values of each item in the state
    }


    // handleClick function that changes the state of the 
    handleSwitch = event => {
        // console.log("switched")

        this.setState({ extinguisher: !this.state.extinguisher })
        console.log(`Switched to ${this.state.extinguisher}`)
    }

    handleClick = event => {
        console.log(`submit clicked`)
        alert("Survey Submitted")
    }

    render() {
        return (
            <div className="container">
                {/* use a button to that changes color upon onclick */}
                {/* use helper function to calculate the risk value (1-100) */}
                <div className="fieldset">
                    <h1>TEST - Level ##</h1>
                    {/* Use horizontal list buttons  */}
                    {/* conditional rendering for buttons */}

                    <div className="switch-basics-example button-group-stack-example">
                        <ButtonGroup stackFor={Breakpoints.SMALL}>
                            <div>
                                <Switch onChange={this.handleSwitch} value={this.state.extinguisher} />Fire Extinguishers
                                </div>
                            <div>
                                <Switch /> Fire/Smoke Alarms
                                </div>
                            <div><Switch /> Fire/Smoke Detection</div>
                            <div><Switch /> Fire Risers</div>
                            <div><Switch /> Path of Egress</div>
                        </ButtonGroup>
                    </div>

                    <div className="button-small expanded">
                        <Button isExpanded onClick={this.handleClick}>Submit Survey</Button>
                    </div>

                </div>
            </div>
        )
    }
}


export default List;