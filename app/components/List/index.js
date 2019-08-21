import React, { Component } from 'react'
// CSS for horizontal list
import { Button, Switch, ButtonGroup, Breakpoints } from 'react-foundation'


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assessments: [
                {
                    name: "extinguisher",
                    installed: false
                },
                {
                    name: "alarms",
                    installed: false
                },
                {
                    name: "detection",
                    installed: false
                },
                {
                    name: "riser",
                    installed: false
                },
                {
                    name: "egress",
                    installed: false
                }
            ],
            riskAssessment: ""
            // risk assessment can be a function of the sum of the values of each item in the state
        }
        this.handleSwitch = this.handleSwitch.bind(this)
    }

    scoreLogic() {
        // code to assess the fire risk level based on the state of the level.

    }

    // handleClick function that changes the state of the 
    handleSwitch(event) {
        const { name, value } = event.target

        console.log(`Name: ${name}, Installed: ${value}`)
        if (value === false) {
            this.setState({
                installed: !this.state.installed
            })
            console.log(`Switched Name: ${name}, Installed: ${value}`)
        }

    }

    handleClick() {
        console.log(`submit clicked`)
        // handle Risk Assessment score calculation
        alert("Survey Submitted")
    }

    render() {
        const { assessments } = this.state
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
                            {assessments.map(item => {
                                return (
                                    <Switch onChange={this.handleSwitch}
                                        key={item.name}
                                        input={{ name: item.name, value: item.installed }}
                                        active={{ text: 'Yes' }}
                                        inactive={{ text: 'No' }}
                                    />)
                            })}
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