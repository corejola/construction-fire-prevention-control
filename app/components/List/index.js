import React, { Component } from 'react'
// CSS for horizontal list
import { Button, Switch, ButtonGroup, Breakpoints } from 'react-foundation'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extinguisher: {
                name: "extinguisher",
                installed: false
            },
            alarm: {
                name: "alarms",
                installed: false
            },
            detection: {
                name: "detection",
                installed: false
            },
            riser: {
                name: "riser",
                installed: false
            },
            egress: {
                name: "egress",
                installed: false
            },
            riskAssessment: ""
            // risk assessment can be a function of the sum of the values of each item in the state
        }
        this.handleSwitch = this.handleSwitch.bind(this)
    }


    // handleClick function that changes the state of the 
    handleSwitch(event) {
        console.log("switched")
        const { name, value } = event.target

        console.log(`Name: ${name}, Installed: ${value}`)
        if (value === "false") {
            this.setState({
                installed: !this.state.installed
            })

        }

    }

    handleClick(event) {
        console.log(`submit clicked`)
        // handle Risk Assessment score calculation
        alert("Survey Submitted")
    }

    render() {
        const { alarm, extinguisher, detection, riser, egress } = this.state

        return (
            <div className="container">
                {/* use a button to that changes color upon onclick */}
                {/* use helper function to calculate the risk value (1-100) */}
                <div className="fieldset">
                    <h3>LEVEL {this.props.level}</h3>
                    {/* Use horizontal list buttons  */}
                    {/* conditional rendering for buttons */}

                    <div className="switch-basics-example button-group-stack-example">
                        <ButtonGroup stackFor={Breakpoints.SMALL}>
                            <div>
                                <Switch
                                    onChange={this.handleSwitch}
                                    input={{ name: extinguisher.name, value: extinguisher.installed }}
                                    active={{ text: 'Yes' }}
                                    inactive={{ text: 'No' }} /> Fire Extinguishers
                                </div>
                            {/* <div>
                                <Switch onChange={this.handleSwitch}
                                    name={extinguisher.name}
                                    value={extinguisher.installed} />Fire Extinguishers
                                </div> */}
                            <div>
                                <Switch
                                    onChange={this.handleSwitch}
                                    input={{ name: alarm.name, value: alarm.installed }}
                                    active={{ text: 'Yes' }}
                                    inactive={{ text: 'No' }} /> Fire/Smoke Alarms
                                </div>
                            <div>
                                <Switch onChange={this.handleSwitch}
                                    input={{ name: detection.name, value: detection.installed }}
                                    active={{ text: 'Yes' }}
                                    inactive={{ text: 'No' }} /> Fire/Smoke Detection
                                </div>
                            <div>
                                <Switch onChange={this.handleSwitch}
                                    input={{ name: riser.name, value: riser.installed }}
                                    active={{ text: 'Yes' }}
                                    inactive={{ text: 'No' }} /> Fire Risers
                            </div>
                            <div>
                                <Switch onChange={this.handleSwitch}
                                    input={{ name: egress.name, value: egress.installed }}
                                    active={{ text: 'Yes' }}
                                    inactive={{ text: 'No' }} /> Path of Egress
                                </div>
                        </ButtonGroup>
                    </div>

                    <div className="button-small expanded">
                        <Button isExpanded onClick={this.handleClick}>Submit Survey</Button>
                    </div>

                </div>
            </div >
        )
    }
}


export default List;